/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-top': '0px 25px 0 0px #FCFBF9', // Defina sua sombra personalizada
        'custom-bottom': '0 -25px 0 0 #FCFBF9',
        'menu-top': '-12px -12px 0 12px #1C1916FF',
        'menu-bottom': '-12px 12px 0 12px #1C1916FF',
      },
      chocolate: {
        'color': '#362B20'
      },
      colors: {
        chocolate70: {
          color: '#1C1916FF'
        },
        milkChocolate: {
          color: '#362B20'
        },
        primaryBrown: {
          'color': '#503F30'
        },
        secondaryBrown: {
          'color': '#7E634B'
        },
        lighterBrown: {
          'color': '#E48162'
        },
        moreLighterBrown: {
          'color': '#C09773'
        },
        notBrown: {
          'color': '#FAEDDC'
        },
        notWhite: {
          color: '#FCFBF9'
        },
        sproutGreen: {
          'color': '#43BD93'
        },
        leavesGreen: {
          'color': '#409778'
        },
        successGreen: {
          'color': '#79AF9A'
        },
        secondaryGreen: {
          'color': '#002B21'
        },
        attentionOrange: {
          'color': '#f4A37E'
        },
        secondaryOrange: {
          'color': '#B9573C'
        },
        ohNoRed: {
          'color': '#F45348'
        },
        secondaryRed: {
          'color': '##C7252F'
        }

      }
    },
  },
  plugins: [],
}

