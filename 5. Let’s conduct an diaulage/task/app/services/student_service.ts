import Student from '#models/student'
import db from '@adonisjs/lucid/services/db'

export default class StudentService {
  async aggregateByStatusesAndIndexRange(range: number = 50000) {
    const students = await Student.query()
      .select(
        db.raw(
          `count(*), status, (index / ${range}) * ${range} as start_range, (index / ${range} + 1) * ${range} as end_range`
        )
      )
      .groupByRaw(`status, index / ${range}`)
      .orderBy('start_range')

    return students.map((student) => ({ status: student.status, ...student.$extras }))
  }
}
