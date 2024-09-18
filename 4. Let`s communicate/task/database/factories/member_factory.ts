import factory from '@adonisjs/lucid/factories'
import Member from '#models/member'
import Status from '../../contracts/enums/status.js'

export const MemberFactory = factory
  .define(Member, async ({ faker }) => {
    const statusValues = Object.values(Status)
    const randomStatus = statusValues[Math.floor(Math.random() * statusValues.length)]
    return {
      index: faker.string.numeric({ length: 6, allowLeadingZeros: true }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: randomStatus,
    }
  })
  .build()
