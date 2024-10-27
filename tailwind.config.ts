import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    fontWeight: {
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Prompt', ...defaultTheme.fontFamily.sans],
        prompt: ['Prompt', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        sorbus: {
          '50': '#fffaec',
          '100': '#fff4d3',
          '200': '#ffe6a5',
          '300': '#ffd26d',
          '400': '#ffb332',
          '500': '#ff990a',
          '600': '#f57c00', // base
          '700': '#cc5e02',
          '800': '#a1490b',
          '900': '#823d0c',
          '950': '#461d04',
        },
      },
    },
  },
}
