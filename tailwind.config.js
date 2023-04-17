const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
    safelist: [
        'text-orange-800',
        'text-orange-400',
        'bg-orange-300',
        'text-red-800',
        'text-red-400',
        'bg-red-300',
        'text-blue-800',
        'text-blue-400',
        'bg-blue-300',
    ]
};
