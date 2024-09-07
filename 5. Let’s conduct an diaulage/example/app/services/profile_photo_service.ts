import Student from '#models/student'
import drive from '@adonisjs/drive/services/main'
import { Readable } from 'stream'

export default class ProfilePhotoService {
  async fillDefault(student: Student) {
    if (student.profilePhoto) {
      return
    }

    const image = await fetch(`https://api.dicebear.com/9.x/adventurer/png?seed=${student.index}`)
    await drive
      .use()
      .putStream(
        `students/${student.index}.png`,
        Readable.fromWeb(image.body as ReadableStream<any>)
      )

      student.profilePhoto =  `students/${student.index}.png`
      await student.save()

      return
  }
}
