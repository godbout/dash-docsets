<?php

namespace Tests\Unit;

use App\Docsets\Alfred4;
use Godbout\DashDocsetBuilder\Services\DocsetBuilder;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

/** @group alfred4 */
class Alfred4Test extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->docset = new Alfred4();
        $this->builder = new DocsetBuilder($this->docset);
    }

    /** @test */
    public function it_generates_a_table_of_contents()
    {
        $toc = $this->docset->entries(
            $this->docset->DownloadedIndex()
        );

        $this->assertNotEmpty($toc);
    }

    /** @test */
    public function it_can_format_the_documentation_files()
    {
        $header = 'mainnav';

        $this->assertStringContainsString(
            $header,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $header,
            $this->docset->format(
                $this->docset->downloadedIndex()
            )
        );
    }

    /** @test */
    public function there_is_a_set_of_manual_icons_prepared_for_this_docset()
    {
        $this->assertFileExists(
            "storage/{$this->docset->code()}/icons/icon.png"
        );

        $this->assertFileExists(
            "storage/{$this->docset->code()}/icons/icon@2x.png"
        );
    }
}
