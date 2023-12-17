import Fastify from 'fastify'
import { PORT } from './config/config.js'
import { routes } from './routes/routes.js'
import dbConnector from './src/model/repository/db-connection.js'
const fastify = Fastify({
  logger: false
})
fastify.register(dbConnector)
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
