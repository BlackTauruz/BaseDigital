<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WalletTransaction extends Model
{
    public function reference(): BelongsTo
    {
        return $this->belongsTo(UserWallet::class, 'from_id');
    }

    public function wallet(): BelongsTo
    {
        return $this->belongsTo(UserWallet::class);
    }
}
