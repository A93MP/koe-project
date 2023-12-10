import 'dotenv/config'
export const PORT = process.env.PORT || 3002
export const urlString = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
