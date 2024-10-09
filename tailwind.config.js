import defaultTheme from 'tailwindcss/defaultTheme';

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
                    "--primary-green-light": "86.63% 0.039 176.18",
                    "--primary-green-dark": "66.27% 0.068 178.11",
                },
            }
        ]
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
