<?php

namespace Tests\Feature;

use App\Docsets\Alfred4;
use Godbout\DashDocsetBuilder\Services\DocsetBuilder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tests\TestCase;
use Wa72\HtmlPageDom\HtmlPageCrawler;

/** @group@ alfred4 */
class Alfred4Test extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->docset = new Alfred4();
        $this->builder = new DocsetBuilder($this->docset);

        if (! Storage::exists($this->docset->downloadedDirectory())) {
            fwrite(STDOUT, PHP_EOL . PHP_EOL . "\e[1;33mGrabbing alfred-4..." . PHP_EOL);
            Artisan::call('grab alfred-4');
        }

        if (! Storage::exists($this->docset->file())) {
            fwrite(STDOUT, PHP_EOL . PHP_EOL . "\e[1;33mPackaging alfred-4..." . PHP_EOL);
            Artisan::call('package alfred-4');
        }
    }

    /** @test */
    public function it_has_a_table_of_contents()
    {
        Config::set(
            'database.connections.sqlite.database',
            "storage/{$this->docset->databaseFile()}"
        );

        $this->assertNotEquals(0, DB::table('searchIndex')->count());
    }

    /** @test */
    public function the_main_nav_gets_removed_from_the_dash_docset_files()
    {
        $mainNav = 'mainnav';

        $this->assertStringContainsString(
            $mainNav,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $mainNav,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_sub_nav_gets_removed_from_the_dash_docset_files()
    {
        $subNav = 'subnav';

        $this->assertStringContainsString(
            $subNav,
            Storage::get($this->docset->downloadedDirectory() . '/' . $this->docset->url() . '/help/general/index.html')
        );

        $this->assertStringNotContainsString(
            $subNav,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_help_menu_gets_removed_from_the_dash_docset_files()
    {
        $helpMenu = 'helpmenu';

        $this->assertStringContainsString(
            $helpMenu,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $helpMenu,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_latest_blog_post_banner_gets_removed_from_the_dash_docset_files()
    {
        $latestBlogPostBanner = 'latestblogpost';

        $this->assertStringContainsString(
            $latestBlogPostBanner,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $latestBlogPostBanner,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_footer_gets_removed_from_the_dash_docset_files()
    {
        $footer = 'footer';

        $this->assertStringContainsString(
            $footer,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $footer,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_footer_meta_gets_removed_from_the_dash_docset_files()
    {
        $footerMeta = 'footermeta';

        $this->assertStringContainsString(
            $footerMeta,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $footerMeta,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_unwanted_JavaScript_tags_get_removed_from_the_dash_docset_files()
    {
        $this->assertStringContainsString(
            'google-analytics.com',
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            'google-analytics.com',
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_online_redirection_html_comment_exists_in_the_docset_files()
    {
        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->downloadedDirectory() . '/' . $this->docset->index())
        );

        $this->assertFalse(
            Str::contains($crawler->getInnerHtml(), 'Online page')
        );

        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->innerDirectory() . '/' . $this->docset->index())
        );

        $this->assertTrue(
            Str::contains($crawler->getInnerHtml(), 'Online page')
        );
    }

    /** @test */
    public function it_inserts_dash_anchors_in_the_doc_files()
    {
        $this->assertStringContainsString(
            'name="//apple_ref/',
            Storage::get($this->docset->innerIndex())
        );
    }
}
