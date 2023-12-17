import { Login } from '../controller/user-controller.js'

export const routes = async (fastify, options) => {
  fastify.post('/login', Login)
}
