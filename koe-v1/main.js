import lockIcon from './src/assets/lock-solid.svg'
import userIcon from './src/assets/user-solid.svg'
import './src/styles/footer.css'
import './src/styles/login.css'
import './src/styles/main.css'

document.querySelector('#app').innerHTML = `
  <div id="loginFragment" class="login-fragment">
      <div class="kanji">
        <!-- <img
          src="./_d5d1d8cf-b58b-499b-b755-9c6fafad6f38-PhotoRoom.png-PhotoRoom.png"
          alt="" /> -->
        声
      </div>
      <form action="" id="loginForm" class="loginForm" autocomplete="off">
        <p>Login</p>

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
      </form>
      <button
        type="button"
        id="loginBtn"
        class="large-button button-login"
        id="loginBtn">
        Sign in
      </button>
    </div>
    <footer>
      <span>&copy;2023</span><a href="">Koe Terms</a
      ><a href="">Privacy Policy</a><a href="">Cookies Policy</a>
    </footer>
`
const form = () => {
  const togglePwdButton = document.getElementById('togglePwd')
  togglePwdButton.addEventListener('click', () =>
    togglePwdVisibility({ togglePwdButton })
  )
}

const togglePwdVisibility = props => {
  const { togglePwdButton } = props
  const password = document.getElementById('userPwd')
  if (password.type === 'password') {
    password.type = 'text'
    togglePwdButton.innerText = 'Hide'
  } else {
    password.type = 'password'
    togglePwdButton.innerText = 'Show'
  }
}
document.addEventListener('DOMContentLoaded', form)
