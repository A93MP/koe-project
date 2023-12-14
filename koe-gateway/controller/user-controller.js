export const Login = async (req, res) => {
  const userEmail = req.body.user
  const userPwd = req.body.pwd
  const rememberMe = req.body.remember
  const loginErrors = []
  // to do validate
  const login = await loginUser(userEmail, userPwd)
  if (login.user !== null) {
    if (rememberMe) {
      // to do send token to redis

    }
    res.code(200).send({ user: login.user, errors: loginErrors })
  } else {
    loginErrors.push(login.error[0])
    res.code(400).send({ user: null, errors: loginErrors })
  }
}

async function loginUser (email, userPwd) {
// to do check info with koe-m1
  const m1Url = 'http://localhost:3002/checkLogin'
  const response = await fetch(m1Url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user: email, pwd: userPwd })
  }).then(res => { return res.json() })
  return response
}
