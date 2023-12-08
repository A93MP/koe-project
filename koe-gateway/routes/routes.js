import { Index } from '../model/controller/user-controller.js'

export const routes = async (fastify, options) => {
  fastify.get('/', Index)
}
