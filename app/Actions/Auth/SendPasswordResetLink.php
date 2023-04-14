<?php

namespace App\Actions\Auth;

use Illuminate\Support\Facades\Password;
use Illuminate\Validation\ValidationException;
use Lorisleiva\Actions\Action;

class SendPasswordResetLink extends Action
{
    public function handle(array $data): string
    {
        $status = Password::sendResetLink($data);

        if ($status != Password::RESET_LINK_SENT) {
            throw ValidationException::withMessages([
                'email' => [trans($status)],
            ]);

        }

        return $status;
    }
}
