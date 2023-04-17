<?php

namespace App\Http\Middleware;

use App\Enums\UserTypes;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user()?->load('wallet'),
                'isUser' => $request->user()?->type == UserTypes::USER(),
                'isShopkeeper' => $request->user()?->type == UserTypes::SHOPKEEPER(),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
            'message' => [
                'success' => $request->session()->get('success'),
                'warning' => $request->session()->get('warning'),
                'danger' => $request->session()->get('danger'),
                'info' => $request->session()->get('info'),
            ],
        ]);
    }
}
