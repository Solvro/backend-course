import type { HttpContext } from '@adonisjs/core/http'
import Student from '#models/student'

export default class AuthController {
  async login({ request }: HttpContext) {
    const { index, password } = request.only(['index', 'password'])
    const student = await Student.verifyCredentials(index, password)
    return await Student.accessTokens.create(student)
  }
}
