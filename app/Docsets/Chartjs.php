<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class Chartjs extends BaseDocset
{
    public const CODE = 'chartjs';
    public const NAME = 'Chart.js';
    public const URL = 'www.chartjs.org';
    public const INDEX = 'index.html';
    public const PLAYGROUND = 'https://codepen.io/lucusc/pen/pgQRdd';
    public const ICON_16 = '../../icons/icon.png';
    public const ICON_32 = '../../icons/icon@2x.png';
    public const EXTERNAL_DOMAINS = [
        'use.typekit.net',
    ];


    public function grab(): bool
    {
        $toIgnore = implode('|', [
            '/cdn-cgi',
            '/docs/2.9.3',
            '/docs/master',
            '/samples/master'
        ]);

        $toGet = implode('|', [
            '\.css',
            '\.ico',
            '\.js',
            '\.svg',
            '/docs',
            '/samples'
        ]);

        system(
            "echo; wget www.chartjs.org \
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

        if (Str::contains($file, "{$this->url()}/docs/latest/index.html")) {
            $crawler->filter('.summary a')->each(function (HtmlPageCrawler $node) use ($entries) {
                $entries->push([
                    'name' => $node->text(),
                    'type' => 'Guide',
                    'path' => $this->url() . '/docs/latest/' . $node->attr('href'),
                ]);
            });
        }

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $this->removeTopHeader($crawler);
        $this->removeLeftSidebar($crawler);
        $this->makeContentFullWidth($crawler);

        // $this->removeUnwantedJavaScript($crawler);
        // $this->insertDashTableOfContents($crawler);

        return $crawler->saveHTML();
    }

    protected function removeTopHeader(HtmlPageCrawler $crawler)
    {
        $crawler->filter('.book-header')->remove();
    }

    protected function removeLeftSidebar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('.book-summary')->remove();
    }

    protected function makeContentFullWidth(HtmlPageCrawler $crawler)
    {
        $crawler->filter('.book')->removeClass('with-summary');
    }
}
