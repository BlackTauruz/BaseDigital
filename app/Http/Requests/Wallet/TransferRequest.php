<?php

namespace App\Http\Requests\Wallet;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class TransferRequest extends FormRequest
{
    protected function prepareForValidation(): void
    {
        $this->merge([
            'document' => Str::remove(['.', '-', '/'], $this->document),
        ]);
    }

    public function rules(): array
    {
        return [
            'document' => ['required', 'string', 'max:14', 'exists:'.User::class],
            'amount' => ['required', 'numeric', 'min:0.01', 'max:'.$this->user()->wallet->balance],
            'password' => ['required', 'current_password', 'exclude'],
        ];
    }
}
