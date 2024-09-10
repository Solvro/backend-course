import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class ValidateIndexMiddleware {
  async handle({params, response}: HttpContext, next: NextFn) {
      if(!params.index) {
          return await next()
      }

      const indexPattern = /^[1-9]\d{5}$/
      if(!indexPattern.test(params.index)) {
          return response.status(401).send({ message: 'Incorrect index format' })
      }

      return await next()
  }
}