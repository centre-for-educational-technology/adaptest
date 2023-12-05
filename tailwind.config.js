import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Futura', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    daisyui: {
        themes: [
            {
                'adaptest': {
                    "primary": "#74956C",
                    "secondary": "#E2D9C2",
                    "accent": "#FDAA63",
                    "neutral": "#3D3935",
                    "base-100": "#1d232a",
                    "info": "#00b5ff",
                    "success": "#ffffff",
                    "warning": "#ffbe00",
                    "error": "#ff5861",
                },
            }
        ]
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
