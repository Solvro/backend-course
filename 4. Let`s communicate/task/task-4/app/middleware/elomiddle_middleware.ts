import { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ElomiddleMiddleware {
    async handle(ctx: HttpContext, next: NextFn) {
      if (ctx.request.input('elo') != 'zelo') {
        return ctx.response.status(403).send('You are not authorized to access this resource')
  }
  await next()
  }
}