/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                spider: {
                    red: '#C0392B',
                    blue: '#212F3D',
                    black: '#000000',
                    white: '#FDFEFE',
                },
            },
            fontFamily: {
                comic: ['"Bangers"', 'cursive'],
                body: ['"Montserrat"', 'sans-serif'],
            },
            animation: {
                'glitch': 'glitch 1s linear infinite',
                'spin-slow': 'spin 3s linear infinite',
            },
            keyframes: {
                glitch: {
                    '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
                    '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
                    '62%': { transform: 'translate(0,0) skew(5deg)' },
                },
            },
        },
    },
    plugins: [],
}
