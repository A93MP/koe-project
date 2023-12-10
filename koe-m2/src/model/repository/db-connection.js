import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from '@fastify/mongodb'
import { urlString } from '../../../config/config.js'

async function dbConnector (fastify, options) {
  fastify.register(fastifyMongo, {
    url: urlString
  })
}

export default fastifyPlugin(dbConnector)
