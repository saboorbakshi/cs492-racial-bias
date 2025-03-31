import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--font-custom)']
      },
      colors: {
        bg: '#ffffff',
        bgSecondary: '#f5f5f5',
        bgTertiary: '#eeeeee',
        fg: '#000000',
        fgSecondary: '#8a8a8a',
        stroke: '#e0e0e0'
      },
      maxWidth: {
        'screen-custom': '576px'
      }
    }
  },
  plugins: []
}
export default config
