import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class AuthController {
  async login({ request, logger }: HttpContext) {
    logger.info('Log in attempt from %s', request.ip())
    const { index, password } = request.only(['index', 'password'])
    const student = await Student.verifyCredentials(index, password)
    logger.info('Logged in user: %o', student)
    return await Student.accessTokens.create(student)
  }
}
