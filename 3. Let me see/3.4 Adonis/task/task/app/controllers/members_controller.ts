import Member from '#models/member'
import { createMemberValidator } from '#validators/student'
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
    async index({ view, request} : HttpContext) {
        const page = Number(request.input('page', 1))
        const limit = 10
        const members = await Member.query()
            .limit(limit)
            .offset(limit * (page - 1))
        return view.render('members', {members, page})
    }

    async create({ view } : HttpContext) {
        return view.render('create')
    }

    async store({ request, response} : HttpContext) {
        const data = await createMemberValidator.validate(request.all())
        await Member.create({...data})
        return response.redirect().toRoute('/')
    }

    async show({ request, view }: HttpContext) {
        return view.render('student', {
            member: await Member.findByOrFail('index', request.param('index'))
        })
    }
}