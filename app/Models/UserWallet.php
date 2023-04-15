<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserWallet extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'balance',
    ];

    protected $with = [
        'user',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function transactions(): HasMany
    {
        return $this->hasMany(WalletTransaction::class, 'wallet_id')
            ->orWhere('from_id', $this->id)
            ->orderBy('id', 'DESC');
    }

    public function balance(): Attribute
    {
        return Attribute::make(get: function ($value) {
            return number_format($value, 2, ',', '.');
        });
    }
}
