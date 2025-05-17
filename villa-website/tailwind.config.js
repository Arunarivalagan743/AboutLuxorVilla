module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#2C2C2C',
        silverGray: '#CCCCCC',
        dimGray: '#666666',
        jetBlack: '#000000',
        lightGray: '#F4F4F4',
        pureWhite: '#FFFFFF',
                charcoal: 'var(--charcoal)',
        'pure-white': 'var(--pure-white)',
        'silver-gray': 'var(--silver-gray)',
        'jet-black': 'var(--jet-black)',
        'dim-gray': 'var(--dim-gray)',
        'light-gray': 'var(--light-gray)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Merriweather'],
        sans: ['Lato', 'Open Sans'],
          serif: ['Playfair Display', 'Merriweather'],
        sans: ['Lato', 'Open Sans'],
      },
        animation: {
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
       animation: {
      float: 'float 3s ease-in-out infinite',
    },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(1) rotate(12deg)' },
          '50%': { opacity: '0.25', transform: 'scale(1.25) rotate(12deg)' },
        },
      },
       float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-6px)' },
      },
    },
  },
  plugins: [],
}






// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         charcoal: 'var(--charcoal)',
//         'pure-white': 'var(--pure-white)',
//         'silver-gray': 'var(--silver-gray)',
//         'jet-black': 'var(--jet-black)',
//         'dim-gray': 'var(--dim-gray)',
//         'light-gray': 'var(--light-gray)',
//       },
//       fontFamily: {
//         serif: ['Playfair Display', 'Merriweather'],
//         sans: ['Lato', 'Open Sans'],
//       },
//       animation: {
//         pulseSlow: 'pulseSlow 4s ease-in-out infinite',
//       },
//       keyframes: {
//         pulseSlow: {
//           '0%, 100%': { opacity: '0.15', transform: 'scale(1) rotate(12deg)' },
//           '50%': { opacity: '0.25', transform: 'scale(1.25) rotate(12deg)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };
