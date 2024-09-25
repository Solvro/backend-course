import factory from '@adonisjs/lucid/factories'
import Student, { Status } from '#models/student'

export const StudentFactory = factory
  .define(Student, async ({ faker }) => {
    return {
      index: Number.parseInt(faker.string.numeric({ length: 6, allowLeadingZeros: false })),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: faker.helpers.objectValue(Status),
    }
  })
  .build()
