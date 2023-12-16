import style from '../styles/index-component.css?raw'
import { NAV } from './config'
export class Index extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    const styles = document.createElement('style')
    styles.innerHTML = style

    this.shadowRoot.innerHTML = `
    <div id="loginFragment" class="login-fragment fade-in">
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
    </footer>
    `
    this.shadowRoot.appendChild(styles)

    this.init()
  }

  set formHeader (value) {
    this.shadowRoot.getElementById('formHeader').innerText = value
  }

  get submitBtn () {
    return this.shadowRoot.getElementById('loginBtn')
  }

  set submitBtnLabel (value) {
    this.shadowRoot.querySelector('#loginBtn p').innerText = value
  }

  init = () => {
    if (this.shadowRoot.querySelector('#loginForm').childElementCount === 0) {
      this.toggleIndexContent(NAV.default)

      const swapViewButton = this.shadowRoot.getElementById('swapView')
      swapViewButton.addEventListener('click', (e) => {
        e.preventDefault()
        this.toggleIndexContent()
      })
    }
  }

  /**
 *
 * @param {String} dest
 * NAV.destination
 */
  toggleIndexContent = () => {
    const form = this.shadowRoot.querySelector('#loginForm')
    const header = this.shadowRoot.getElementById('formHeader')
    this.transition([form, header], true)

    form.innerHTML = ''
    let destination = NAV.login
    const location = header.innerText

    if (location === 'Login') {
      destination = NAV.register
    }

    import('./' + destination.file).then((module) => {
      const component = document.createElement(destination.name)
      form.appendChild(component)
    })
    this.transition([form, header], false)
  }

  transition (elements, flag) {
    if (flag) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('hidden')
        elements[i].classList.remove('fade-in')
      }
    } else {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('fade-in')
        elements[i].classList.remove('hidden')
      }
    }
  }
}

customElements.define('index-component', Index)
