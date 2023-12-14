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

  render () {
    const styles = document.createElement('style')
    styles.innerHTML = style
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
          <span id="togglePwd" class="small pwd-toggle">Show</span>
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
          <span id="togglePwd2" class="small pwd-toggle">Show</span>
        </div>
        
        
    `
    this.shadowRoot.appendChild(styles)
    this.login()
  }

  login = () => {
    if (typeof window !== 'undefined') {
      const koeToken = localStorage.getItem('koeToken')
      if (koeToken === 'undefined' || koeToken === null) {
        this.form()
      }
    }
  }

  form = () => {
    const header = document.getElementById('formHeader')
    header.innerText = 'Register'
    document.getElementById('loginBtn').innerText = 'Sign up'
    const togglePwdButton = this.shadowRoot.getElementById('togglePwd')
    togglePwdButton.addEventListener('click', () =>
      this.togglePwdVisibility({ togglePwdButton })
    )
    const submitButton = document.getElementById('loginBtn')
    submitButton.addEventListener('click', this.validateForm)
  }
}

customElements.define('register-component', Register)
