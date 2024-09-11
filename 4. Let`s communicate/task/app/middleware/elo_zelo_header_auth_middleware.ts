import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EloZeloHeaderAuthMiddleware {
  async handle({request, response}: HttpContext, next: NextFn) {
    if(request.header('elo') !== 'zelo') {
      response.status(401).send({ message: 'There is not `elo zelo` in request header' })
    }
    
    return await next()
  }
}