import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SolvroMember from 'App/Models/SolvroMember'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class StudentController {

  public async index({ view }: HttpContextContract) {
    const students = await SolvroMember.all()
    return view.render('students.index', { students })
  }


  public async create({ view }: HttpContextContract) {
    return view.render('students.create')
  }


  public async store({ request, response, session }: HttpContextContract) {

    const validationSchema = schema.create({
      firstName: schema.string({}, [
        rules.required(),
        rules.minLength(2),
        rules.maxLength(255),
      ]),
      lastName: schema.string({}, [
        rules.required(),
        rules.minLength(2),
        rules.maxLength(255),
      ]),
      status: schema.string({}, [
        rules.required(),
        rules.minLength(2),
        rules.maxLength(255),
      ]),
    })

    const validatedData = await request.validate({
      schema: validationSchema,
      messages: {
        'firstName.required': 'First name is required',
        'lastName.required': 'Last name is required',
        'status.required': 'Status is required',
      },
    })


    await SolvroMember.create(validatedData)


    session.flash({ success: 'Student created successfully!' })
    return response.redirect('/students')
  }


  public async show({ params, view, response }: HttpContextContract) {
    const student = await SolvroMember.find(params.id)

    if (!student) {
      return response.status(404).send('Student not found')
    }

    const email = `${student.firstName.toLowerCase()}.${student.lastName.toLowerCase()}@solvro.com`
    return view.render('students.show', { student, email })
  }
}
