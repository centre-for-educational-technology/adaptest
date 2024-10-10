<?php

namespace Tests\Feature\Http\Controllers;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class InstructionsControllerTest extends TestCase
{
    /**
     * @test
     */
    public function it_shows_instructions_page()
    {
        $response = $this->get(route('instructions'));
        $response->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Instructions')
        );
    }
}
