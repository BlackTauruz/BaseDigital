<?php

namespace App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Inertia\Response;

class DashboardController
{
    public function __invoke(Request $request): Response
    {
        return inertia('Dashboard', [
            'transactions' => $request->user()->wallet->transactions,
        ]);
    }
}
