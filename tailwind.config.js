/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", '[data-theme="dark"]'], // Dark Mode qo‘llab-quvvatlash
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Foydalaniladigan fayllar
    theme: {
        extend: {}, // Agar o‘zgartirishlar bo‘lsa, bu yerga qo‘shasan
    },
    plugins: [], // Agar plugin ishlatsang, shu yerga qo‘shasan
};