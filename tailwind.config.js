import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff0f0',
          100: '#ffdddd',
          200: '#ffc0c0',
          300: '#ff9494',
          400: '#ff5857',
          500: '#ff2423',
          600: '#ff0403',
          700: '#d70100',
          800: '#b10403',
          900: '#920b0a',
          950: '#500000',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
