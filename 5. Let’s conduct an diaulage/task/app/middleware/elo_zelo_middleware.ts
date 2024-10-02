import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EloZeloMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (ctx.request.header('Elo') !== 'zelo') {
      return ctx.response.badRequest({
        message: `Request to this resource must contain header 'Elo' with 'zelo' value`,
      })
    }

    return await next()
  }
}
