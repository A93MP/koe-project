import Fastify from 'fastify'
import { PORT } from './config/config.js'
import dbConnector from './src/model/repository/db-connection.js'
// import { routes } from './routes/routes.js'
const fastify = Fastify({
  logger: true
})
// fastify.register(routes)
fastify.register(dbConnector)
fastify.listen({
  port: PORT
}, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`Server is now listening on ${address}`)
})
