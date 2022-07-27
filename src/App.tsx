import { Component, createSignal, JSX, onCleanup, onMount } from 'solid-js'
import { CONTAINER, H1, H6 } from './ui'

/*
 * Self adjusting timer
 */
const Timer = () => {
  const START = new Date()
  const [currentTimeAsString, setCurrentTimeAsString] = createSignal<string>(
    new Date(
      Math.floor((Date.now() - START.getMilliseconds()) / 1000) * 1000
    ).toLocaleTimeString()
  )
  const [dateAsString, setDateAsString] = createSignal<string>(
    new Intl.DateTimeFormat('de', {
      dateStyle: 'full',
    }).format(START)
  )
  const INTERVAL_DURATION = 1000
  let expected = Date.now() + INTERVAL_DURATION
  let drift = 0
  let timeout: number = 0

  const tick = () => {
    drift = Date.now() - expected
    if (drift > INTERVAL_DURATION) {
      // TODO: adjust timer e.g when tab was inactive
      console.info('timer drifted')
    }
    setCurrentTimeAsString(
      new Date(
        Math.floor((Date.now() - START.getMilliseconds()) / 1000) * 1000
      ).toLocaleTimeString()
    )
    expected += INTERVAL_DURATION
    timeout = setTimeout(tick, Math.max(0, INTERVAL_DURATION - drift))
  }

  onMount(() => {
    timeout = setTimeout(tick, INTERVAL_DURATION)
  })

  onCleanup(() => clearTimeout(timeout))

  return (
    <>
      <h1 class={H1()}>{currentTimeAsString()}</h1>
      <h6 class={H6()}>{dateAsString()}</h6>
    </>
  )
}

const Container = ({ children }: { children?: JSX.Element }) => {
  return <div class={CONTAINER()}>{children}</div>
}

const App: Component = () => {
  return (
    <Container>
      <Timer />
    </Container>
  )
}

export default App
