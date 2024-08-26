import vine from '@vinejs/vine'
import { DateTime, Duration } from 'luxon'

export const createStudentValidator = vine.compile(
  vine.object({
    index: vine
      .number()
      .min(100000)
      .max(999999)
      .unique(async (db, value) => !(await db.from('students').where('index', value).first())),
    firstName: vine.string().maxLength(255),
    lastName: vine.string().maxLength(255),
    dateOfBirth: vine.date().before(
      DateTime.now()
        .minus(Duration.fromObject({ years: 18 }))
        .toFormat('yyyy-LL-dd')
    ),
  })
)
