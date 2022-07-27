import { globalCss } from '@stitches/core'

export const globalStyles = globalCss({
  '@import': `url('https://fonts.googleapis.com/css2?family=Assistant:wght@600;700&display=swap')`,
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    outline: 'none',
    border: 'none',
    lineHeight: 1,
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    fontFamily: `Assistant, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`,
  },
  'body, html, #root': {
    width: '100%',
    height: '100%',
  },
})
