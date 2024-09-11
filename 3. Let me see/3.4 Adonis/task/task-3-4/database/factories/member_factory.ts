import factory from '@adonisjs/lucid/factories'
import Member from '#models/member'
import Status from '../../contracts/enums/Status.js'

export const MemberFactory = factory
  .define(Member, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: Status.ACTIVE,
    }
  })
  .build()
