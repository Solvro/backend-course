import Member from '#models/member'
import { createMemberValidator } from '#validators/member'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
    async index({ view, request }: HttpContext) {
        const page = Number(request.input('page', 1))
        const limit = 10
        const members = await Member.query()
          .limit(limit)
          .offset(limit * (page - 1))
      
        return view.render('members', {
          members: members,
          page: page,
        })
    }

    async create({ view }: HttpContext) {
        return view.render('create')
    }

    async store({ request, response }: HttpContext) {
        const data = request.all()
        const payload = await createMemberValidator.validate(data)
          
        await Member.create({
          index: payload.index,
          name: payload.name,
          surname: payload.surname,
          status: payload.status,
        })
      
        return response.redirect().toRoute('/')
    }

    async show({ request, view }: HttpContext) {
        return await view.render('member',
            { member: await Member.findBy('index', request.param('index')) }
        )
    }
}