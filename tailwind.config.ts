import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Add theme extensions if needed
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Add the aspect-ratio plugin here
  ],
}
export default config
