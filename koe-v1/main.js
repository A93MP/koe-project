import { NAV } from './src/components/config'
import './src/styles/main.css'
window.addEventListener('load', () => {
  document.querySelector('#app').innerHTML = `
<div id="loginFragment" class="login-fragment">
      <div class="kanji">
      声
    </div>
    <p id='formHeader'></p>
    <form action="" id="loginForm" class="loginForm fade-in" autocomplete="off">
        
       
      </form>
     <button
          id="loginBtn"
          type="button"
          class="large-button button-login"
          >
          <p>
            Sign in
          </p>
        </button>
        <div class='form-options'>
            <a href="" id='swapView' class="small">Sign in now instead</a>
          </div>
       
    </div>
    <footer>
      <span>&copy;2023</span><a href="">Koe Terms</a
      ><a href="">Privacy Policy</a><a href="">Cookies Policy</a>
    </footer>`
  if (document.querySelector('#loginForm').childElementCount === 0) {
    toggleLogin(NAV.default)
    const swapViewButton = document.getElementById('swapView')
    swapViewButton.addEventListener('click', (e) => {
      e.preventDefault()
      toggleLogin()
    })
  }
})

/**
 *
 * @param {String} dest
 * NAV.destination
 */
export const toggleLogin = () => {
  const form = document.querySelector('#loginForm')
  const header = document.getElementById('formHeader')

  form.classList.add('hidden')
  form.classList.remove('fade-in')
  header.classList.add('hidden')
  header.classList.remove('fade-in')

  form.innerHTML = ''
  let destination = NAV.login
  const location = header.innerText

  if (location === 'Login') {
    destination = NAV.register
  }

  import('./src/components/' + destination.file).then((module) => {
    const component = document.createElement(destination.name)
    form.appendChild(component)
  })
  form.classList.add('fade-in')
  form.classList.remove('hidden')
  header.classList.add('fade-in')
  header.classList.remove('hidden')
}
