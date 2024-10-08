<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormSubmitted;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact')
            ->with('mailFromAddress', config('mail.from.address'))
            ->with('phoneNumber', env('CONTACT_PHONE', ''))
            ->with('address', env('CONTACT_ADDRESS', ''));
    }

    /**
     * @throws ValidationException
     */
    public function store(Request $request): Response|RedirectResponse
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        Mail::to(config('mail.from.address'))
            ->send(new ContactFormSubmitted($request->get('name'), $request->get('email'), $request->get('message')));

        return Redirect::route('contact');
    }
}
