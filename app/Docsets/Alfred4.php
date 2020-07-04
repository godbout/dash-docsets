<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class Alfred4 extends BaseDocset
{
    public const CODE = 'alfred-4';
    public const NAME = 'Alfred 4';
    public const URL = 'www.alfredapp.com';
    public const INDEX = 'help/index.html';
    public const PLAYGROUND = '';
    public const ICON_16 = '../../icons/icon.png';
    public const ICON_32 = '../../icons/icon@2x.png';
    public const EXTERNAL_DOMAINS = [
        'fonts.googleapis.com',
    ];


    public function grab(): bool
    {
        $toGet = implode('|', [
           '\.css',
            '\.ico',
            '\.js',
            '\.png',
            '\.svg',
            '/css',
            '/help'
        ]);

        system(
            "echo; wget www.alfredapp.com/help \
                --mirror \
                --trust-server-names \
                --accept-regex='{$toGet}' \
                --ignore-case \
                --page-requisites \
                --adjust-extension \
                --convert-links \
                --span-hosts \
                --domains={$this->externalDomains()} \
                --directory-prefix=storage/{$this->downloadedDirectory()} \
                -e robots=off \
                --quiet \
                --show-progress",
            $result
        );

        return $result === 0;
    }

    public function entries(string $file): Collection
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $entries = collect();
        $entries = $entries->merge($this->guideEntries($crawler, $file));
        $entries = $entries->merge($this->sectionEntries($crawler, $file));

        return $entries;
    }

    protected function guideEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        if (Str::contains($file, $this->index())) {
            $crawler->filter('#helpmenu a')->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Guide',
                    'path' => $this->url() . '/help/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    protected function sectionEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        $crawler->filter('h1:not(:first-child), h2')->each(function (HtmlPageCrawler $node) use ($entries, $file) {
            $entries->push([
                'name' => trim($node->text()),
                'type' => 'Section',
                'path' => Str::after($file, $this->innerDirectory())
            ]);
        });

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $this->removeMainNav($crawler);
        $this->removeSubNav($crawler);
        $this->removeHelpMenu($crawler);
        $this->removeLatestBlogPostBanner($crawler);
        $this->removeFooter($crawler);
        $this->removeFooterMeta($crawler);

        $this->removeUnwantedJavaScript($crawler);

        $this->insertOnlineRedirection($crawler, $file);
        $this->insertDashTableOfContents($crawler);

        return $crawler->saveHTML();
    }

    protected function removeMainNav(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#mainnav')->remove();
    }

    protected function removeSubNav(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#subnav')->remove();
    }

    protected function removeHelpMenu(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#helpmenu')->remove();
    }

    protected function removeLatestBlogPostBanner(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#latestblogpost')->remove();
    }

    protected function removeFooter(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#footer')->remove();
    }

    protected function removeFooterMeta(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#footermeta')->remove();
    }

    protected function removeUnwantedJavaScript(HtmlPageCrawler $crawler)
    {
        $crawler->filterXPath("//script[text()[contains(.,'google-analytics.com')]]")->remove();
    }

    protected function insertOnlineRedirection(HtmlPageCrawler $crawler, string $file)
    {
        $onlineUrl = Str::substr(Str::after($file, $this->innerDirectory()), 1, -11);

        $crawler->filter('html')->prepend("<!-- Online page at $onlineUrl -->");
    }

    protected function insertDashTableOfContents($crawler)
    {
        $crawler->filter('head')
            ->before('<a name="//apple_ref/cpp/Section/Top" class="dashAnchor"></a>');

        $crawler->filter('h1:not(:first-child), h2, h3')->each(static function (HtmlPageCrawler $node) {
            $node->before(
                '<a id="' . Str::slug($node->text()) . '" name="//apple_ref/cpp/Section/' . rawurlencode($node->text()) . '" class="dashAnchor"></a>'
            );
        });
    }
}
