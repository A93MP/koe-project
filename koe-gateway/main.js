import cors from '@fastify/cors'
import secureSession from '@fastify/secure-session'
import Fastify from 'fastify'
import fs from 'node:fs'
import path from 'node:path'
import * as url from 'url'
import { PORT } from './config/config.js'
import { routes } from './routes/routes.js'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const fastify = Fastify({
  logger: false
})
await fastify.register(cors, {
  origin: ['http://localhost:5173'],
  method: ['GET', 'POST', 'PUT']
})
fastify.register(secureSession, {
  sessionName: 'koeSession',
  cookieName: 'koeCookie',
  key: fs.readFileSync(path.join(__dirname, 'secret-key')),
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 2592000
  }
})
fastify.register(routes)
fastify.listen({
  port: PORT
}, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})
