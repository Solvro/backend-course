import { BaseCommand } from '@adonisjs/core/build/standalone'
import Enrollment from 'App/Models/Enrollment'

export default class TestRelations extends BaseCommand {
  public static commandName = 'test:relations'
  public static description = 'Test model relations'

  public async run() {
    const enrollment = await Enrollment.query()
      .preload('member')
      .preload('course')
      .first()

    if (enrollment) {
      this.logger.info(`Member: ${enrollment.member.name} ${enrollment.member.surname}`)
      this.logger.info(`Course: ${enrollment.course.name}`)
    } else {
      this.logger.info('No enrollment found')
    }
  }
}