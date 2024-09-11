import Member from '#models/member'
import { createMemberUpdateValidator, createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'


export default class MembersController {
  async index({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const perPage = Number(request.input('perPage', 10))
    const filter = request.input('filter', '')
    const sortBy = request.input('sortBy', 'index')
    const order = request.input('order', 'asc')
    
    const query = Member.query()
    if (filter) {
      query.where((builder) => {
        builder
          .where('name', 'LIKE', `%${filter}%`)
          .orWhere('first-name', 'LIKE', `%${filter}%`)
          .orWhere('last-name', 'LIKE', `%${filter}%`)
      })
    }

    query.orderBy(sortBy, order)

    const members = await query.paginate(page, perPage)
    
    return members
  }

  async store({ request }: HttpContext) {
    const data = await createMemberValidator.validate(request.all())
    const member = await Member.create(data)
    return member
  }

  async show({ params }: HttpContext) {
    return Member.findByOrFail(params.index)
  }

  async update({ params, request }: HttpContext) {
    const data = await createMemberUpdateValidator.validate(request.all())
    const member = await Member.findByOrFail(params.id)
    member.merge(data)
    member.save()

    return member
  }

  async destroy({ params }: HttpContext) {
      const member = await Member.findByOrFail(params.id)
      await member.delete()
      return {message: 'Member deleted'}
    }
}