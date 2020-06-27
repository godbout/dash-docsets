<?php

namespace Tests\Feature;

use App\Docsets\Bulma;
use Godbout\DashDocsetBuilder\Services\DocsetBuilder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tests\TestCase;
use Wa72\HtmlPageDom\HtmlPageCrawler;

/** @group bulma */
class BulmaTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->docset = new Bulma();
        $this->builder = new DocsetBuilder($this->docset);

        if (! Storage::exists($this->docset->downloadedDirectory())) {
            fwrite(STDOUT, PHP_EOL . PHP_EOL . "\e[1;33mGrabbing bulma..." . PHP_EOL);
            Artisan::call('grab bulma');
        }

        if (! Storage::exists($this->docset->file())) {
            fwrite(STDOUT, PHP_EOL . PHP_EOL . "\e[1;33mPackaging bulma..." . PHP_EOL);
            Artisan::call('package bulma');
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
    public function the_top_notice_gets_removed_from_the_dash_docset_files()
    {
        $topNotice = 'bd-notice';

        $this->assertStringContainsString(
            $topNotice,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $topNotice,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_navbar_gets_removed_from_the_dash_docset_files()
    {
        $navbar = 'id="navbar"';

        $this->assertStringContainsString(
            $navbar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $navbar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_breadcrumb_gets_removed_from_the_dash_docset_files()
    {
        $breadcrumb = 'bd-breadcrumb';

        $this->assertStringContainsString(
            $breadcrumb,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $breadcrumb,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_right_sidebar_gets_removed_from_the_dash_docset_files()
    {
        $rightSidebar = '<aside';

        $this->assertStringContainsString(
            $rightSidebar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $rightSidebar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_nav_tabs_gets_removed_from_the_dash_docset_files()
    {
        $navTabs = 'bd-tabs';

        $this->assertStringContainsString(
            $navTabs,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $navTabs,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_nav_prev_next_gets_removed_from_the_dash_docset_files()
    {
        $navPrevNext = 'bd-prev-next-bis';

        $this->assertStringContainsString(
            $navPrevNext,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $navPrevNext,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_improve_on_GitHub_section_gets_removed_from_the_dash_docset_files()
    {
        $improveOnGitHub = 'id="typo"';

        $this->assertStringContainsString(
            $improveOnGitHub,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $improveOnGitHub,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_support_footer_gets_removed_from_the_dash_docset_files()
    {
        $supportFooter = 'bd-footer-support';

        $this->assertStringContainsString(
            $supportFooter,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $supportFooter,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_footer_gets_removed_from_the_dash_docset_files()
    {
        $footer = '<footer';

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
    public function the_Bulma_book_section_gets_removed_from_the_dash_docset_files()
    {
        $bulmaBookSection = 'id="bulma-book"';

        $this->assertStringContainsString(
            $bulmaBookSection,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $bulmaBookSection,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_newsletter_gets_removed_from_the_dash_docset_files()
    {
        $newsletter = 'id="newsletter"';

        $this->assertStringContainsString(
            $newsletter,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $newsletter,
            Storage::get($this->docset->innerIndex())
        );
    }
}
