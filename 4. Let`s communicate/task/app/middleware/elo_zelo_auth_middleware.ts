import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EloZeloAuthMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (ctx.request.header('elo') != 'zelo') {
      return ctx.response.status(401).send({ message: 'Elo not zelo' })
    }

    return await next()
  }
}