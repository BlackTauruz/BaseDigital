<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\ResponseFactory;

class EmailVerificationController extends Controller
{
    /**
     *  Display the email verification view.
     */
    public function index(Request $request): RedirectResponse|Response|ResponseFactory
    {
        return $request->user()->hasVerifiedEmail()
            ? redirect()->route('dashboard')
            : inertia('Auth/VerifyEmail', ['status' => session('status')]);
    }

    /**
     *  Sends an email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->route('dashboard');
        }

        $request->user()->sendEmailVerificationNotification();

        return back()->with('status', 'verification-link-sent');
    }

    /**
     *  Check the user's email.
     */
    public function update(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->route('dashboard', ['verified' => 1]);
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        return redirect()->route('dashboard', ['verified' => 1]);
    }
}
