import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import limiter from '@adonisjs/limiter/services/main'

export default class RateLimiterMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const throttle = limiter.define('global', () => {
      return limiter.allowRequests(15).every("1 minute")
    })
    const isAllowed = await throttle(request.ip())
    if (!isAllowed) {
      return response.tooManyRequests('Too many requests, please try again later.')
    } 
    await next()
  }
}