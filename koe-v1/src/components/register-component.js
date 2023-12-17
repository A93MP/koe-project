import lockIcon from '../assets/lock-solid.svg'
import userIcon from '../assets/user-solid.svg'
import style from '../styles/register-component.css?raw'

export class Register extends HTMLElement {
  constructor () {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  disconnectedCallback () {
    const index = document.querySelector('index-component')
    index.submitBtn.removeEventListener('click', this.validateForm, false)
  }

  render () {
    const styles = document.createElement('style')
    styles.innerHTML = style
    const index = document.querySelector('index-component')
    index.formHeader = 'Register'
    index.submitBtnLabel = 'Sign up'
    this.shadowRoot.innerHTML = `
        <div class="input-container">
          <span
            ><img src="${userIcon}" class="icon" alt="user email"
          /></span>
          <input
            placeholder="Email"
            type="email"
            class="input"
            id="userEmail" />
        </div>

        <div class="input-container">
          <span
            ><img src="${lockIcon}" class="icon" alt="user password"
          /></span>
          <input
            type="password"
            placeholder="Password"
            class="input"
            id="userPwd" />
          <span id="togglePwd" data-id="userPwd" class="small pwd-toggle">Show</span>
        </div>
        <div class="input-container">
          <span
            ><img src="${lockIcon}" class="icon" alt="user password"
          /></span>
          <input
            type="password"
            placeholder="Repeat Password"
            class="input"
            id="userPwd2" />
          <span id="togglePwd2" data-id="userPwd2" class="small pwd-toggle">Show</span>
        </div>
        
        
    `
    this.shadowRoot.appendChild(styles)
    this.initRegister()
  }

  initRegister = () => {
    if (typeof window !== 'undefined') {
      const koeToken = localStorage.getItem('koeToken')
      if (koeToken === 'undefined' || koeToken === null) {
        this.initListeners()
      }
    }
  }

  initListeners = () => {
    const togglePwdButton = this.shadowRoot.getElementById('togglePwd')
    const togglePwdButton2 = this.shadowRoot.getElementById('togglePwd2')

    togglePwdButton.addEventListener('click', (e) =>
      this.togglePwdVisibility(e)
    )
    togglePwdButton2.addEventListener('click', (e) =>
      this.togglePwdVisibility(e)
    )

    const index = document.querySelector('index-component')
    index.submitBtn.addEventListener('click', this.validateForm, false)
  }

  togglePwdVisibility = e => {
    const id = e.target.getAttribute('data-id')
    const input = this.shadowRoot.getElementById(id)
    console.log(id, input)
    if (input.type === 'password') {
      input.type = 'text'
      e.target.innerText = 'Hide'
    } else {
      input.type = 'password'
      e.target.innerText = 'Show'
    }
  }

  validateForm = () => {
    console.log('validando en register')
  }
}

customElements.define('register-component', Register)
