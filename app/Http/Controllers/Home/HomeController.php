<?php

namespace App\Http\Controllers\Home;

use Illuminate\Foundation\Application;
use Inertia\Response;

class HomeController
{
    public function __invoke(): Response
    {
        return inertia('Welcome', [
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
