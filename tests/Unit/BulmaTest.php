<?php

namespace Tests\Unit;

use App\Docsets\Bulma;
use Godbout\DashDocsetBuilder\Services\DocsetBuilder;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

/** @group bulma */
class BulmaTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->docset = new Bulma();
        $this->builder = new DocsetBuilder($this->docset);
    }

    /** @test */
    public function it_generates_a_table_of_contents()
    {
        $toc = $this->docset->entries(
            $this->docset->downloadedIndex()
        );

        $this->assertNotEmpty($toc);
    }

    /** @test */
    public function it_can_format_the_documentation_files()
    {
        $navbar = 'id="navbar"';

        $this->assertStringContainsString(
            $navbar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $navbar,
            $this->docset->format(
                $this->docset->downloadedIndex()
            )
        );
    }
}
