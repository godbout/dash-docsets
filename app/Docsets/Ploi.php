<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class Ploi extends BaseDocset
{
    public const CODE = 'ploi-api';
    public const NAME = 'Ploi API';
    public const URL = 'developers.ploi.io';
    public const INDEX = 'index.html';
    public const PLAYGROUND = '';
    public const ICON_16 = '../documentator.s3.eu-west-3.amazonaws.com/11/conversions/favicon-favicon-16.png';
    public const ICON_32 = '../documentator.s3.eu-west-3.amazonaws.com/11/conversions/favicon-favicon-32.png';
    public const EXTERNAL_DOMAINS = [
        'documentator.s3.eu-west-3.amazonaws.com'
    ];


    /**
     * overriden because there's a sitemap but not usable
     */
    public function grab(): bool
    {
        system(
            "echo; wget {$this->url()} \
                --mirror \
                --trust-server-names \
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

        return $entries;
    }

    protected function guideEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        if (Str::contains($file, "{$this->url()}/index.html")) {
            $crawler->filter('aside a.ml-2')->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => trim($node->text()),
                    'type' => 'Guide',
                    'path' => $this->url() . '/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $this->removeHeader($crawler);
        $this->removeSidebar($crawler);
        $this->removePreviousAndNextNavigation($crawler);
        $this->updateTopPadding($crawler);
        $this->removeUnwantedJavaScript($crawler);

        $this->insertOnlineRedirection($crawler, $file);
        $this->insertDashTableOfContents($crawler);

        return $crawler->saveHTML();
    }

    protected function removeHeader(HtmlPageCrawler $crawler)
    {
        $crawler->filter('header')->remove();
    }

    protected function removeSidebar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('aside')->remove();
    }

    protected function removePreviousAndNextNavigation(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#previous-and-next')->remove();
    }

    protected function updateTopPadding(HtmlPageCrawler $crawler)
    {
        $crawler->filter('main')
            ->addClass('md:pt-12')
        ;
    }

    protected function removeUnwantedJavaScript(HtmlPageCrawler $crawler)
    {
        $crawler->filter("link[href*='analytics.dennissmink.com']")->remove();
        $crawler->filterXPath("//script[text()[contains(.,'analytics.dennissmink.com')]]")->remove();
        $crawler->filter('noscript')->remove();
    }

    protected function insertOnlineRedirection(HtmlPageCrawler $crawler, string $file)
    {
        $onlineUrl = Str::substr(Str::after($file, $this->innerDirectory()), 1, -5);

        $crawler->filter('html')->prepend("<!-- Online page at $onlineUrl -->");
    }


    protected function insertDashTableOfContents(HtmlPageCrawler $crawler)
    {
        $crawler->filter('h1')
            ->before('<a name="//apple_ref/cpp/Section/Top" class="dashAnchor"></a>');

        $crawler->filter('h2, h3, h4')->each(static function (HtmlPageCrawler $node) {
            $node->before(
                '<a id="' . Str::slug($node->text()) . '" name="//apple_ref/cpp/Section/' . rawurlencode($node->text()) . '" class="dashAnchor"></a>'
            );
        });

        $crawler->filterXPath('//p[not(descendant::code)]')->each(static function (HtmlPageCrawler $node) {
            $node->before(
                '<a id="' . Str::slug($node->text()) . '" name="//apple_ref/cpp/Section/' . rawurlencode($node->text()) . '" class="dashAnchor"></a>'
            );
        });
    }
}
