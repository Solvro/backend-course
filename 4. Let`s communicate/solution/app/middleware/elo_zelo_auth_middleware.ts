import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EloZeloAuthMiddleware {
  async handle({ request, response }: HttpContext, next: NextFn) {
    if (request.header('elo') != 'żelo') {
      return response.status(401).send({ message: 'Not elo żelo' })
    }

    return await next()
  }
}
