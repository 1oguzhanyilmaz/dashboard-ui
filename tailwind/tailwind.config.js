module.exports = {
    purge: [],
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },
        linearGradientColors: {
            'red': '#f00',
            'blue1-blue2': ['#8EC5FC', '#E0C3FC'],
            'red-green-blue': ['#f00', '#0f0', '#00f'],
            'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
        },
        extend: {
            colors: {
                cyan: '#9cdbff',
            },
            fontSize: {
              '2xs': '.65rem',
              '3xs': '.55rem',
            },
            height: {
                '.5': '.12rem',
                '80': '20rem',
                '3/4': '75%',
                '3/5': '60%',
            }
        },
    },
    variants: {},
    plugins: [
      require('tailwindcss-gradients'),
    ],
}