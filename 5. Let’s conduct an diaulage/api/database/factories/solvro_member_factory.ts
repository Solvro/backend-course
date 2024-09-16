import factory from '@adonisjs/lucid/factories'
import SolvroMember from '#models/solvro_member'
import { Status } from '#models/solvro_member'

export const SolvroMemberFactory = factory
  .define(SolvroMember, async ({ faker }) => {
    return {
      index: faker.number.int({ min: 100000, max: 999999 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: faker.helpers.enumValue(Status),
      password: faker.internet.password({ length: 5, memorable: true, pattern: /[A-Z]/ }),
    }
  })
  .build()
