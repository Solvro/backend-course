import Member from '#models/member'
import { createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
  async index({ view, request }: HttpContext) {
    const members = await Member.query().paginate(
      request.input('page', 1),
      request.input('perPage', 10)
    )
    return view.render('members/index', { members })
  }

  async create({ view }: HttpContext) {
    return view.render('members/create')
  }

  async store({ request, response, session }: HttpContext) {
    const data = await createMemberValidator.validate(request.all())
    await Member.create({ ...data })
    session.flash('member-notification', 'Pomyślnie utworzono nowego członka')
    return response.redirect().toRoute('/members')
  }

  async show({ request, view }: HttpContext) {
    return view.render('members/show', {
      member: await Member.findByOrFail('index', request.param('index')),
    })
  }
}
