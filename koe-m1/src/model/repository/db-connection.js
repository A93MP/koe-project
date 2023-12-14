import fastifyMysql from '@fastify/mysql'
import fastifyPlugin from 'fastify-plugin'
import { urlString } from '../../../config/config.js'

async function dbConnector (fastify, options) {
  fastify.register(fastifyMysql, {
    promise: true,
    connectionString: urlString
  })
}

export default fastifyPlugin(dbConnector)
