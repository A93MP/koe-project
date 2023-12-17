import { getUser } from '../repository/user.js'
export const getLogin = async (user, pwd, db) => {
  const userInfo = await getUser(user, pwd, db)
  const response = { user: null }
  if (userInfo) {
    response.user = userInfo
  }
  return response
}
