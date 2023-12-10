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
