import Member from '#models/member'
import { createLoginValidator } from '#validators/auth'
import { createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request, response }: HttpContext) {
    const payload = await createMemberValidator.validate(request.all())
    const member = await Member.create(payload)

    return response.created(member)
  }

  async login({ request, response }: HttpContext) {
    const { index, password } = await createLoginValidator.validate(request.all())

    const member = await Member.verifyCredentials(index, password)
    const token = await Member.accessTokens.create(member)

    return response.ok({ token: token, member: member.serialize() })
  }
}