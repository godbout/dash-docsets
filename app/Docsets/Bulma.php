<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Wa72\HtmlPageDom\HtmlPage;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class Bulma extends BaseDocset
{
    public const CODE = 'bulma';
    public const NAME = 'Bulma';
    public const URL = 'bulma.io';
    public const INDEX = 'documentation/index.html';
    public const PLAYGROUND = '';
    public const ICON_16 = 'favicons/favicon-16x16.png?v=201701041855';
    public const ICON_32 = 'favicons/favicon-32x32.png?v=201701041855';
    public const EXTERNAL_DOMAINS = [
        'use.fontawesome.com',
    ];


    public function grab(): bool
    {
        $toIgnore = implode('|', [
            '/versions.bulma.io',
        ]);

        $toGet = implode('|', [
            '\.css',
            '\.gif',
            '\.ico',
            '\.jpg',
            '\.js',
            '\.png',
            '\.svg',
            '\.webmanifest',
            '/documentation',
        ]);

        system(
            "echo; wget bulma.io/documentation \
                --mirror \
                --trust-server-names \
                --reject-regex='{$toIgnore}' \
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

        $entries = $entries->merge($this->helperEntries($crawler, $file));
        $entries = $entries->merge($this->elementEntries($crawler, $file));
        $entries = $entries->merge($this->componentEntries($crawler, $file));
        $entries = $entries->merge($this->guideEntries($crawler, $file));
        $entries = $entries->merge($this->sectionEntries($crawler, $file));

        return $entries;
    }

    protected function helperEntries(HtmlPageCrawler $crawler, string $file)
    {
        $pageTitle = (new HtmlPage(Storage::get($file)))->getTitle();

        $entries = collect();

        if ($pageTitle === 'Documentation | Bulma: Free, open source, and modern CSS framework based on Flexbox') {
            $crawler->filter(
                '#categories > div:nth-child(3) > ul a'
            )->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Helper',
                    'path' => $this->url() . '/documentation/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    protected function elementEntries(HtmlPageCrawler $crawler, string $file)
    {
        $pageTitle = (new HtmlPage(Storage::get($file)))->getTitle();

        $entries = collect();

        if ($pageTitle === 'Documentation | Bulma: Free, open source, and modern CSS framework based on Flexbox') {
            $crawler->filter(
                '#categories > div:nth-child(7) > ul a'
            )->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Element',
                    'path' => $this->url() . '/documentation/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    protected function componentEntries(HtmlPageCrawler $crawler, string $file)
    {
        $pageTitle = (new HtmlPage(Storage::get($file)))->getTitle();

        $entries = collect();

        if ($pageTitle === 'Documentation | Bulma: Free, open source, and modern CSS framework based on Flexbox') {
            $crawler->filter(
                '#categories > div:nth-child(8) > ul a'
            )->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Component',
                    'path' => $this->url() . '/documentation/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    protected function guideEntries(HtmlPageCrawler $crawler, string $file)
    {
        $pageTitle = (new HtmlPage(Storage::get($file)))->getTitle();

        $entries = collect();

        if ($pageTitle === 'Documentation | Bulma: Free, open source, and modern CSS framework based on Flexbox') {
            $crawler->filter(
                'header.bd-category-header a.bd-category-name'
            )->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Guide',
                    'path' => $this->url() . '/documentation/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    protected function sectionEntries(HtmlPageCrawler $crawler, string $file)
    {
        $pageTitle = (new HtmlPage(Storage::get($file)))->getTitle();

        $entries = collect();

        if ($pageTitle === 'Documentation | Bulma: Free, open source, and modern CSS framework based on Flexbox') {
            $crawler->filter(
                '#categories > div:not(:nth-child(3)):not(:nth-child(7)):not(:nth-child(8)) > ul a'
            )->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Section',
                    'path' => $this->url() . '/documentation/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $this->removeTopNotice($crawler);
        $this->removeNavbar($crawler);
        $this->removeBreadcrumb($crawler);
        $this->removeRightSidebar($crawler);
        $this->removeNavTabs($crawler);
        $this->removeNavPrevNext($crawler);
        $this->removeImproveOnGitHub($crawler);
        $this->removeSupportFooter($crawler);
        $this->removeBulmaBook($crawler);
        $this->removeNewsletter($crawler);
        $this->removeFooter($crawler);

        $this->removeUnwantedJavaScript($crawler);

        $this->insertDashTableOfContents($crawler);

        return $crawler->saveHTML();
    }

    protected function removeTopNotice(HtmlPageCrawler $crawler)
    {
        $crawler->filter('.bd-notice')->remove();
    }

    protected function removeNavbar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#navbar')->remove();
    }

    protected function removeBreadcrumb(HtmlPageCrawler $crawler)
    {
        $crawler->filter('.bd-breadcrumb')->remove();
    }

    protected function removeRightSidebar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('aside.bd-side')->remove();
    }

    protected function removeNavTabs(HtmlPageCrawler $crawler)
    {
        $crawler->filter('nav.bd-tabs')->remove();
    }

    protected function removeNavPrevNext(HtmlPageCrawler $crawler)
    {
        $crawler->filter('nav.bd-prev-next-bis')->remove();
    }

    protected function removeImproveOnGitHub(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#typo')->remove();
    }

    protected function removeSupportFooter(HtmlPageCrawler $crawler)
    {
        $crawler->filter('.bd-footer-support')->remove();
    }

    protected function removeFooter(HtmlPageCrawler $crawler)
    {
        $crawler->filter('footer.footer')->remove();
    }

    protected function removeUnwantedJavaScript(HtmlPageCrawler $crawler)
    {
        $crawler->filter("script[src*='native.js']")->remove();
        $crawler->filterXPath("//script[text()[contains(.,'connect.facebook.net')]]")->remove();
        $crawler->filter("script[src*='platform.twitter.com']")->remove();
        $crawler->filterXPath("//script[text()[contains(.,'www.google-analytics.com')]]")->remove();
    }

    protected function removeBulmaBook(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#bulma-book')->remove();
    }

    protected function removeNewsletter(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#newsletter')->remove();
    }

    protected function insertDashTableOfContents(HtmlPageCrawler $crawler)
    {
        $crawler->filter('head')
            ->before('<a name="//apple_ref/cpp/Section/Top" class="dashAnchor"></a>');

        $crawler->filter('h3.bd-anchor-title')->each(static function (HtmlPageCrawler $node) {
            $node->before(
                '<a id="' . Str::slug($node->text()) . '" name="//apple_ref/cpp/Section/' . rawurlencode($node->text()) . '" class="dashAnchor"></a>'
            );
        });
    }
}
