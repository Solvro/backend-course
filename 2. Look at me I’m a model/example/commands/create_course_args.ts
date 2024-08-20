import { BaseCommand, args } from '@adonisjs/core/ace' // importujemy obiekt args, który zajmuje się argumentami funkcji 
import type { CommandOptions } from '@adonisjs/core/types/ace'
import db from '@adonisjs/lucid/services/db'

export default class CreateCourse extends BaseCommand {
  static commandName = 'create:course-args'
  static description = 'Creates a new course based on args'

  @args.string() // dodajemy argument
  declare name: string

  static options: CommandOptions = {
    startApp: true // pozwala na dostęp do całej aplikacji, w naszym przypadku db
  }

  async run() {
   await db.rawQuery("INSERT INTO courses (name) values (?)", [this.name]); // rawQuery umożliwia podmianę parametrów z użyciem znaku ? lub nazywanych parametrów 
    this.logger.info(`Pomyślnie utworzono nowy kurs: ${this.name}`)
  }
}
