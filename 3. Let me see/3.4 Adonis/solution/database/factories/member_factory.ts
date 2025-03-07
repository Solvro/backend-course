import factory from '@adonisjs/lucid/factories'
import Member from '#models/member'

export const MemberFactory = factory
  .define(Member, async ({ faker }) => {
    return {
      index: faker.number.int({ min: 100000, max: 999999 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: faker.helpers.arrayElement(['implementation', 'active', 'alumni', 'inactive']) as
        | 'implementation'
        | 'active'
        | 'alumni'
        | 'inactive',
    }
  })
  .build()
