import Member from '#models/member'
import { createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
  async index({ view }: HttpContext) {
    return view.render('pages/members', {
      members: await Member.all(),
    })
  }

  async show({ request, view }: HttpContext) {
    const id = request.param('id')
    try {
      const member = await Member.findByOrFail('id', id)
      const email = `${member.firstName.toLowerCase()}.${member.lastName.toLowerCase()}@solvro.pl`
      return view.render('pages/details', { member: member, email: email })
    } catch (err) {
      return view.render('pages/errors/not_found')
    }
  }

  async create({ view }: HttpContext) {
    return view.render('pages/add_member')
  }

  async store({ request, view }: HttpContext) {
    const data = await request.validateUsing(createMemberValidator)
    await Member.create({ ...data })
    return view.render('pages/add_member_success')
  }
}
