<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WalletTransaction extends Model
{
    protected $fillable = [
        'from_id',
        'description',
        'previous_balance',
        'new_balance',
        'difference',
        'refunded_at',
    ];

    protected $with = [
        'reference',
        'wallet',
    ];

    public function reference(): BelongsTo
    {
        return $this->belongsTo(UserWallet::class, 'from_id');
    }

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(UserWallet::class);
    }

    public function difference(): Attribute
    {
        return Attribute::make(get: function ($value) {
            return number_format($value, 2, ',', '.');
        });
    }

    protected function serializeDate(\DateTimeInterface $date): string
    {
        return $date->format('d/m/Y H:i');
    }
}
