export const getUser = async (email, pwd, db) => {
  try {
    const connection = await db.getConnection()
    const [rows, fields] = await connection.query(
      'SELECT * FROM UserInfo WHERE email=? AND pwd=?',
      [email, pwd]
    )

    connection.release()
    if (rows.length > 0) {
      return rows[0]
    } else {
      console.log('No user found with the provided email and password.')
      return null
    }
  } catch (error) {
    console.error('Error executing the SQL query:', error.message)
    throw error
  }
}
