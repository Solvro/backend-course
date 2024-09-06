import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from './app/models/member.ts'

export default class MembersController {

  public async index ({ response }: HttpContextContract) {
    const members = await Member.all()
    return response.ok(members)
  }

  public async show ({ params, response }: HttpContextContract) {
    try {
      const member = await Member.findOrFail(params.id)
      return response.ok(member)
    } catch (error) {
      return response.notFound({ message: 'Member not found' })
    }
  }

  public async store ({ request, response }: HttpContextContract) {
    const data = request.only(['firstName', 'lastName', 'status'])
    const member = await Member.create(data)
    return response.created(member)
  }

  public async update ({ params, request, response }: HttpContextContract) {
    try {
      const member = await Member.findOrFail(params.id)
      const data = request.only(['firstName', 'lastName', 'status'])
      member.merge(data)
      await member.save()
      return response.ok(member)
    } catch (error) {
      return response.notFound({ message: 'Member not found' })
    }
  }

  public async destroy ({ params, response }: HttpContextContract) {
    try {
      const member = await Member.findOrFail(params.id)
      await member.delete()
      return response.ok({ message: 'Member deleted successfully' })
    } catch (error) {
      return response.notFound({ message: 'Member not found' })
    }
  }
}
