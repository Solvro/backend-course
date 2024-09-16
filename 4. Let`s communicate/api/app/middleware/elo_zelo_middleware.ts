import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EloZeloMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    if (ctx.request.header('elo') !== 'zelo') {
      return ctx.response.status(400).send({
        error: 'Request must contain header "elo" equal to "zelo". Aborting request!',
      })
    }

    const output = await next()
    return output
  }
}
