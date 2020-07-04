<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class Alfred4 extends BaseDocset
{
    public const CODE = 'alfred-4';
    public const NAME = 'Alfred 4';
    public const URL = 'www.alfredapp.com';
    public const INDEX = 'help/index.html';
    public const PLAYGROUND = '';
    public const ICON_16 = 'favicon-16x16.png';
    public const ICON_32 = 'favicon-32x32.png';
    public const EXTERNAL_DOMAINS = [
        'fonts.googleapis.com',
    ];


    public function grab(): bool
    {
        $toIgnore = implode('|', [
        ]);

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

        $crawler->filter('h1')->each(function (HtmlPageCrawler $node) use ($entries) {
            $entries->push([
                'name' => 'What Shows up in Dash',
                'type' => 'One of the Million of Dash Entry Type',
                'path' => 'The Path to the File',
            ]);
        });

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        /**
         * This is equivalent to murder
         */
        $crawler->filter('body')->remove();

        return $crawler->saveHTML();
    }
}
