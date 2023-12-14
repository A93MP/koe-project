export const getUser = async (email, pwd, db) => {
  const connection = await db.getConnection()
  const [rows, fields] = await connection.query(
    'SELECT * FROM UserInfo where email=? and pwd=?', [email, pwd]
  )
  connection.release()
  return rows[0]
}
