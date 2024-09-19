import factory from '@adonisjs/lucid/factories'
import Student from '#models/student'

export const StudentFactory = factory
  .define(
    Student, // @ts-ignore
    async ({ faker }) => {
      return {
        index: faker.string.numeric({ length: 6, allowLeadingZeros: false }),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        status: faker.helpers.arrayElement(['IMPLEMENTATION', 'ACTIVE', 'ALUMNI', 'INACTIVE']),
      }
    }
  )
  .build()
