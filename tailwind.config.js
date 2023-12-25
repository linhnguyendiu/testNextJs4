/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "button-bg": "var(--button-bg)",
        "button-hover": "var(--button-hover)",
        "pink1": "var(--variable-collection-pink1)",
        "black": "var( --variable-collection-black)",
        "blue5":"var( --varable-collection-blue5)",
        "gray1":"var( --varable-collection-gray1)",
        "gray2":"var( --varable-collection-gray2)",
        "gray3":"var( --varable-collection-gray3)",
        "gray4":"var( --varable-collection-gray4)",
        "gray5":"var( --varable-collection-gray5)",
        "gray6":"var( --varable-collection-gray6)",
        "pink01":"var( --varable-collection-pink-1)",
        "pink-6":"var( --varable-collection-pink-6)",
        "pink0":"var( --varable-collection-pink0)",
        "pink4":"var( --varable-collection-pink4)",
        "pink5":"var( --varable-collection-pink5)",
        "purple6":"var( --varable-collection-purple6)",
        "white":"var( --varable-collection-white)",
        "yellow1":"var( --variable-collection-yellow1)",
      },
      fontFamily: {
        sans: ['var(--font-sen)'],
        mono: ['var(--font-roboto-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
