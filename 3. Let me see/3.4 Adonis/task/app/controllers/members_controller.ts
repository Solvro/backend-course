import Member from '#models/member';
import { createMemberValidator } from '#validators/create_member';
import type { HttpContext } from '@adonisjs/core/http'

export default class MembersController {
    async index(ctx: HttpContext) {
        let members = await Member.all();

        return ctx.view.render('members/index', { members });
    }

    async show(ctx: HttpContext) {
        let member = await Member.findByOrFail('index', ctx.request.param('index'));

        return ctx.view.render('members/show', { member })
    }

    async create(ctx: HttpContext) {
        return ctx.view.render('members/create')
    }

    async store(ctx: HttpContext) {
        const data = await createMemberValidator.validate(ctx.request.all())
        await Member.create({ ...data });
        
        return ctx.response.redirect().toRoute('/members')
    }
}