import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class EloZeloMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    if (ctx.request.header('elo') !== 'żelo') {
      ctx.response.abort({ message: 'nie ma elo żelo' })
    }
    const output = await next()
    return output
  }
}
