<?php

namespace App\Notifications;

use App\Notifications\Channels\SmsChannel;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ReceivedTransferNotification extends Notification
{
    public function __construct()
    {
    }

    public function via($notifiable): array
    {
        return ['mail', SmsChannel::class];
    }

    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Nova transferência')
            ->line('Você acabou de receber uma nova transação.')
            ->action('Veja no painel', url('/'));
    }

    public function toSms($notifiable): string
    {
        return 'Nova transferência recebida. Acesse seu painel para mais detalhes: '.route('dashboard');
    }

    public function toArray($notifiable): array
    {
        return [];
    }
}
