<?php

namespace App\Notifications\Channels;

use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Http;

class SmsChannel
{
    public function send(object $notifiable, Notification $notification): void
    {
        $message = $notification->toSms($notifiable);

        Http::post('https://run.mocky.io/v3/4ce65eb0-2eda-4d76-8c98-8acd9cfd2d39', [
            'message' => $message,
        ]);
    }
}
