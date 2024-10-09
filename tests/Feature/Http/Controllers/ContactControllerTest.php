<?php

namespace Tests\Feature\Http\Controllers;

use App\Mail\ContactFormSubmitted;
use Illuminate\Support\Facades\Mail;
use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class ContactControllerTest extends TestCase
{
    /**
     * @test
     */
    public function it_shows_contact_page()
    {
        $this->withoutExceptionHandling();

        $response = $this->get(route('contact'));
        $response->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Contact')
            ->has('mailFromAddress')
            ->where('mailFromAddress', config('mail.from.address'))
            ->has('phoneNumber')
            ->where('phoneNumber', env('CONTACT_PHONE'))
            ->has('address')
            ->where('address', env('CONTACT_ADDRESS'))
        );
    }

    /**
     * @test
     */
    public function it_sends_a_message()
    {
        Mail::fake();

        $this->post(route('contact'))
            ->assertSessionHasErrors(['name', 'email', 'message'])
            ->assertStatus(302);

        $this->post(route('contact'), ['name' => 'Name', 'email' => 'email', 'message' => 'Message'])
            ->assertSessionHasErrors(['email'])
            ->assertStatus(302);

        $this->post(route('contact'), ['name' => 'Name', 'email' => 'name@contact.com', 'message' => "Your\rMessage\nWas\r\nSent"])
            ->assertStatus(302)
            ->assertRedirect(route('contact'));

        Mail::assertSent(ContactFormSubmitted::class, function ($mail) {
            return $mail->envelope()->subject === trans('Contact form submitted')
                && $mail->content()->with === [
                    'name' => 'Name',
                    'email' => 'name@contact.com',
                    'lines' => ['Your', 'Message', 'Was', 'Sent'],
                ];
        });
    }
}
