import { render } from '@testing-library/vue'
import App from './App.vue'

describe('App component test', () => {
  test('render component', () => {
    const { getByText } = render(App, {
      props: {}
    })

    const title = getByText("Vite + Vue")
    console.log({ title })
  })
})