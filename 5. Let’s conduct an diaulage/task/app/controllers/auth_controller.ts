import Member from '#models/member'
import type {HttpContext} from '@adonisjs/core/http'
import hash from "@adonisjs/core/services/hash";

export default class AuthController {
  public async generateToken({params, request, response}: HttpContext) {
    const member = await Member.findOrFail(params.id)
    const {password} = request.body()
    const isPasswordValid = await hash.verify(member.password, password)

    if (!isPasswordValid) {
      return response.unauthorized({error: 'Invalid credentials'})
    }
    const token = await Member.accessTokens.create(member)

    return {
      type: 'bearer',
      value: token.value!.release(),
    }
  }
}
