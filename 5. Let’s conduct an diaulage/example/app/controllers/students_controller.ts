import type { HttpContext } from '@adonisjs/core/http'
import { updateStudentValidator } from '#validators/student'
import drive from '@adonisjs/drive/services/main'
import ProfilePhotoService from '#services/profile_photo_service'
import { inject } from '@adonisjs/core'
import db from '@adonisjs/lucid/services/db'

export default class StudentsController {
  /**
   * Handle form submission for the edit action
   */
  @inject()
  async update({ request, auth }: HttpContext, profilePhotoService: ProfilePhotoService) {
    const student = await auth.getUserOrFail()
    const data = await updateStudentValidator.validate(request.all())

    const image = request.file('profilePhoto', {
      size: '10mb',
      extnames: ['jpeg', 'jpg', 'png'],
    })

    if (image) {
      const path = `students/${student.index}.${image.extname}`
      await image.moveToDisk(path)
      student.merge({ profilePhoto: await drive.use().getUrl(path) })
    }

    db.transaction(async (trx) => {
      student.useTransaction(trx)
      await profilePhotoService.fillDefault(student)

      student.merge(data)
      await student.save()
    })

    return { message: 'Student successfully updated.', student }
  }
}
