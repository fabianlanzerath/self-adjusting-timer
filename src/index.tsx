/* @refresh reload */
import { render } from 'solid-js/web'

import App from './App'
import { globalStyles } from './stitches.config'

globalStyles()

render(() => <App />, document.getElementById('root') as HTMLElement)
