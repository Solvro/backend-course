import Student from '#models/student'
import db from '@adonisjs/lucid/services/db'

export default class StudentService {
  async aggregateByStatusesAndIndexRange(range: number = 50000) {
    const students = await Student.query()
      .select(
        db.raw(
          `count(*), status, (index / ${range}) * ${range} as start_index, (index / ${range} + 1) * ${range} as end_index`
        )
      )
      .groupByRaw(`status, index / ${range}`)
      .orderBy('start_index')

    return students.map((student) => ({ status: student.status, ...student.$extras }))
  }
}
