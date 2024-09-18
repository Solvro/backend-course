import Member from '#models/member'
import type { HttpContext } from '@adonisjs/core/http'
import { createMemberValidator } from '#validators/member'

export default class MemberController {
  // Wyświetlanie listy wszystkich członków
  async index({ request, view }: HttpContext) {
    const page = request.input('page', 1)
    const limit = 10
    
    const members = await Member.query().paginate(page, limit)
    return view.render('members/students', { members })
  }

  // Wyświetlanie szczegółów członka po jego indeksie
  async show({ request, view }: HttpContext) {
    const index = request.param('index')
    const member = await Member.findByOrFail('index', index)
    return view.render('members/member', { member })
  }

  // Formularz do dodania nowego członka
  async create({ view }: HttpContext) {
    return view.render('members/create')
  }

  // Przetwarzanie danych formularza i zapis nowego członka
  async store({ request, response, session }: HttpContext) {
    const data = await createMemberValidator.validate(request.all())
    await Member.create({ ...data })
    session.flash({ successMessage: 'Członek został dodany pomyślnie!' })
    return response.redirect('/')
  }
}
