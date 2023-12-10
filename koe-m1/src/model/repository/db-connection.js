import fastifyPlugin from 'fastify-plugin'
import { urlString } from '../../../config/config.js'
import fastifyMysql from '@fastify/mysql'

async function dbConnector (fastify, options) {
  fastify.register(fastifyMysql, {
    connectionString: urlString
  })
}

export default fastifyPlugin(dbConnector)
