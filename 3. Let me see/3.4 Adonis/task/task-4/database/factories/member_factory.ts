import factory from '@adonisjs/lucid/factories'
import Member from '#models/member'

const validStatuses: Array< 'implementation' | 'active' | 'alumni' | 'inactive'> = [
  'active',
  'inactive',
  'implementation',
  'alumni',
]

export const MemberFactory = factory
  .define(Member, async ({ faker }) => {
    return {
      index: faker.number.int(90000),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: faker.helpers.arrayElement(validStatuses),
    }
  })
  .build()