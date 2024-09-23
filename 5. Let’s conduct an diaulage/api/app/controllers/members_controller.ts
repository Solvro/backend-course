import type { HttpContext } from '@adonisjs/core/http'
import SolvroMember from '#models/solvro_member'
import { editMember, deleteMember } from '#abilities/main'
import { createMemberValidator, updateMemberValidator } from '#validators/member'
import drive from '@adonisjs/drive/services/main'
import { inject } from '@adonisjs/core'

export default class MembersController {
  /**
   *@description Display a list of resource
   */
  @inject()
  async index({ request }: HttpContext) {
    const page = Number(request.input('page', 1))
    const perPage = Number(request.input('perPage', 5))

    const members = (await SolvroMember.query().paginate(page, perPage)).serialize({
      fields: { omit: ['createdAt', 'updatedAt'] },
    })
    return members
  }

  async store({ request }: HttpContext) {
    const payload = request.all()
    const data = await createMemberValidator.validate(payload)
    const member = await SolvroMember.create(data)
    return member
  }

  async show({ params }: HttpContext) {
    const member = await SolvroMember.find(params.index)
    return member
  }

  async update({ bouncer, params, request, response }: HttpContext) {
    if (await bouncer.denies(editMember, params.index)) {
      return response.forbidden('You cannot edit other members')
    }

    const member = await SolvroMember.find(params.index)
    if (!member) {
      response.status(404)
      response.send(`Member not found with given index: ${params.index}`)
      return
    }
    const payload = request.all()
    const data = await updateMemberValidator.validate(payload)

    const image = request.file('photo', {
      size: '2mb',
      extnames: ['jpeg', 'jpg', 'png'],
    })

    if (image) {
      const path = `members/${params.index}.${image.extname}`
      image.moveToDisk(path)
      member.merge({ profilePhoto: await drive.use().getSignedUrl(path) })
    }

    await member.merge(data).save()
    return member
  }

  /**
   * Delete record
   */
  async destroy({ bouncer, params, response }: HttpContext) {
    if (await bouncer.denies(deleteMember, params.index)) {
      return response.forbidden('You cannot delete other members')
    }
    const member = await SolvroMember.find(params.index)
    if (!member) {
      response.status(404)
      response.send(`Member not found with given index: ${params.index}`)
      return
    }
    await member.delete()
    response.status(204)
  }
}
