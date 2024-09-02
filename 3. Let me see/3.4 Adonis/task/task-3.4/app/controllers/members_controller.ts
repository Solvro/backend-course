import type { HttpContext } from '@adonisjs/core/http'
import { createMemberValidator } from '#validators/member'
import SolvroMember from '#models/solvro_member'
import { Status } from '#models/solvro_member'

export default class MembersController {
  async index({ request, view }: HttpContext) {
    const page = Number(request.input('page', 1))
    const perPage = Number(request.input('perPage', 5))

    const members = await SolvroMember.query()
      .limit(perPage)
      .offset(perPage * (page - 1))

    return view.render('members', {
      members,
      page,
      perPage,
    })
  }

  async create({ view }: HttpContext) {
    return view.render('create_member', { status: Status })
  }

  async store({ request, response }: HttpContext) {
    const data = request.all()
    const payload = await createMemberValidator.validate(data)
    await SolvroMember.create({
      ...payload,
    })

    return response.redirect().toRoute('/')
  }

  async show({ request, view }: HttpContext) {
    const index = request.param('index')
    const member = await SolvroMember.find(index)
    return view.render('member_details', { member, index })
  }
}
