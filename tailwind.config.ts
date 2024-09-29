import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
