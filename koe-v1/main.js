import { NAV } from './src/components/config'
import './src/styles/main.css'
window.addEventListener('load', () => {
  initKoe()
})

const initKoe = () => {
  toggleView()
  document.addEventListener('loginSuccess', (e) => { handleLogin(e) })
}

const handleLogin = (e) => {
  const data = e.detail.user
  // check if session is active and validate
  toggleView(data)
}

const toggleView = (props) => {
  let destination = NAV.index
  // check for credentials, is user remembered? is session active? else...
  if (props !== undefined) {
    const { data } = props
    if (data) {
      destination = NAV.profile
    }
  }
  import('./src/components/' + destination.file).then((module) => {
    const component = document.createElement(destination.name)
    transition(true)
    document.getElementById('app').innerHTML = ''
    document.getElementById('app').appendChild(component)
    transition(false)
  })
}

export const transition = (flag) => {
  const app = document.getElementById('app')
  if (flag) {
    app.classList.add('hidden')
    app.classList.remove('fade-in')
  } else {
    app.classList.add('fade-in')
    app.classList.remove('hidden')
  }
}
