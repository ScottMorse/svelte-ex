import App from './App.svelte'

console.log(process.env)

const app = new App({
  target: document.body,
  props: {
    name: process.env.ENV,
  },
})

export default app
