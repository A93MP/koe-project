import lockIcon from '../assets/lock-solid.svg'
import userIcon from '../assets/user-solid.svg'
import style from '../styles/login-component.css?raw'

export class Login extends HTMLElement {
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
        <div class="form-options">
          <div class="remember-me">
            <input id="rememberMe" type="checkbox" class="checkbox" /><label
              for="rememberMe"
              class="small"
              >Remember me</label
            >
          </div>
          <a href="" class="small">Forgot password</a>
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
    header.innerText = 'Login'
    document.getElementById('loginBtn').innerText = 'Sign in'

    const togglePwdButton = this.shadowRoot.getElementById('togglePwd')
    togglePwdButton.addEventListener('click', () =>
      this.togglePwdVisibility({ togglePwdButton })
    )
    const submitButton = document.getElementById('loginBtn')
    submitButton.addEventListener('click', this.validateForm)
  }

  validateForm = async () => {
    const userEmail = this.shadowRoot.getElementById('userEmail').value
    const userPwd = this.shadowRoot.getElementById('userPwd').value
    const rememberMe = this.shadowRoot.getElementById('rememberMe')
    const url = 'http://127.0.0.1:3000/login'
    const data = { user: userEmail, pwd: userPwd, remember: rememberMe.checked }
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => { return res.json() })
  }

  togglePwdVisibility = props => {
    const { togglePwdButton } = props
    const password = this.shadowRoot.getElementById('userPwd')
    if (password.type === 'password') {
      password.type = 'text'
      togglePwdButton.innerText = 'Hide'
    } else {
      password.type = 'password'
      togglePwdButton.innerText = 'Show'
    }
  }
}
customElements.define('login-component', Login)
