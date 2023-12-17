import { getUserController } from '../src/controller/user.js'
export const routes = async (fastify, options) => {
  const { checkLogin } = getUserController({ db: fastify.mysql })
  fastify.post('/checkLogin', checkLogin)
}
