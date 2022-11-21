/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            // that is animation class
            animation: {
                fadeIn: "fadeIn 0.2s ease-in-out",
            },

            // that is actual animation
            keyframes: () => ({
                fadeIn: {
                    "0%": {
                        opacity: 0,
                        display: "none",
                    },
                    "100%": {
                        opacity: 1,
                        display: "block",
                    },
                },
            }),
        },
    },
    variants: {},
    plugins: [],
};
