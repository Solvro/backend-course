import factory from '@adonisjs/lucid/factories'
import Student from '#models/student'
import { DateTime } from 'luxon'

export const StudentFactory = factory
  .define(Student, async ({ faker }) => {
    return {
      index: faker.number.int({ min: 100000, max: 999999 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      dateOfBirth: DateTime.fromJSDate(faker.date.birthdate({ min: 17, max: 30 })),
    }
  })
  .build()
