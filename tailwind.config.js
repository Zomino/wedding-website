/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [`./src/pages/**/*.{js,jsx,ts,tsx}`, `./src/components/**/*.{js,jsx,ts,tsx}`],
    theme: {
        colors: {
            elephant: {
                lighter: '#f5eded',
                light: '#d4cfcf',
                DEFAULT: '#a19f9f',
                dark: '#807e7e',
                darker: '#676464',
            },
        },
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            lato: ['Lato', 'sans-serif'],
        },
        extend: {
            borderWidth: {
                1: '1px',
            },
        },
    },
    plugins: [],
};
