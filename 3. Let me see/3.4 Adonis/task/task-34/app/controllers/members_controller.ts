import type { HttpContext } from '@adonisjs/core/http'

import Member from '#models/member'
import { createMemberValidator } from '#validators/member'

export default class MembersController {
  async index({ view, request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const limit = 10
    const members = await Member.query()
      .limit(limit)
      .offset(limit * (page - 1))
    return view.render('members', { members, page })
  }

  async create({ view }: HttpContext) {
    return view.render('create')
  }

  async store({ request, response }: HttpContext) {
    const payload = await request.validateUsing(createMemberValidator)
    await Member.create({ ...payload })
    return response.redirect().toRoute('/')
  }

  async show({ request, view }: HttpContext) {
    return view.render('member', {
      member: await Member.findOrFail('index', request.param('index')),
    })
  }
}
