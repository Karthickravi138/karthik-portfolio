/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                muted: 'var(--muted)',
                accent: 'var(--accent)',
                'accent-foreground': 'var(--accent-foreground)',
                card: 'var(--card)',
                'card-foreground': 'var(--card-foreground)',
                // Apple-Grade Premium Palette
                midnight: '#020617', // Deep Slate
                surface: '#0B1220',  // Elevated Dark Surface
                'soft-light': '#F6F7FB', // Light Mode Background (Not pure white)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-aurora': 'linear-gradient(to right, #22D3EE, #8B5CF6)',
                'gradient-dark': 'linear-gradient(to bottom, #050816, #0B1026)',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
            },
            boxShadow: {
                'premium-sm': '0 2px 8px rgba(0, 0, 0, 0.04)',
                'premium-md': '0 8px 16px rgba(0, 0, 0, 0.06)',
                'premium-glow-cyan': '0 0 20px rgba(34, 211, 238, 0.1)',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
