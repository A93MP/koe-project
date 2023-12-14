import { getLogin } from '../model/service/user.js'

export function getUserController (props) {
  const { db } = props
  const checkLogin = async (req, res) => {
    const { user, pwd } = req.body
    const userInfo = await getLogin(user, pwd, db)
    if (userInfo) {
      if (userInfo.user !== null) {
        res.code(200).send({ user: userInfo.user, error: [] })
      }
      res.code(404).send({ user: userInfo.user, error: ['Incorrect email or password'] })
    } else {
      res.code(400).send({ user: userInfo.user, error: 'Cannot connect to login server' })
    }
  }

  return { checkLogin }
}
