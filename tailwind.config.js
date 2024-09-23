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
            colors: {
                "primary-green-light": "oklch(var(--primary-green-light) / <alpha-value>)",
                "primary-green-dark": "oklch(var(--primary-green-dark) / <alpha-value>)",
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
                    "base-100": "#F6F4EA",
                    "info": "#00b5ff",
                    "success": "#ffffff",
                    "warning": "#ffbe00",
                    "error": "#ff5861",
                    "--primary-green-light": "86.9% 0.031 173.5",
                    "--primary-green-dark": "66.58% 0.053 176.62",
                },
            }
        ]
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
