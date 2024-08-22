import { BaseCommand, args } from '@adonisjs/core/ace' // importujemy obiekt args, który zajmuje się argumentami funkcji 
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateCourse extends BaseCommand {
  static commandName = 'fetch:latest-course'
  static description = 'Displays latest course with some phraze in the name'

  @args.string() // dodajemy argument
  declare name: string

  static options: CommandOptions = {
    startApp: true // pozwala na dostęp do całej aplikacji, w naszym przypadku db
  }

  async run() {
    const latestCourse = await db
      .from('courses')
      .select('id', 'name', 'created_at')
      .whereLike('name', `%${this.name}%`)
      .orderBy('created_at', 'desc')
      .first()

    this.logger.info(`Kurs #${latestCourse.id} ${latestCourse.name} utworzono ${latestCourse.created_at}`)
  }
}
