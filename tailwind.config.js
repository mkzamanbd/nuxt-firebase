const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        `components/**/*.{vue,js}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `plugins/**/*.{js,ts}`,
        `nuxt.config.{js,ts}`
    ],
    darkMode: 'class',
    theme: {
        themeVariants: ['dark', 'light'],
        extend: {
            maxHeight: {
                0: '0',
                xl: '36rem',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        backgroundColor: ['hover', 'focus', 'active', 'odd', 'dark'],
        display: ['responsive', 'dark'],
        textColor: ['focus-within', 'hover', 'active', 'dark'],
        placeholderColor: ['focus', 'dark'],
        borderColor: ['focus', 'hover', 'dark'],
        divideColor: ['dark'],
        boxShadow: ['focus'],
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}