import factory from '@adonisjs/lucid/factories'
import Member from '#models/member'

let currentIndex = 100000

export const MemberFactory = factory
  .define(Member, async ({faker}) => {
    return {
      index: currentIndex++,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: faker.helpers.arrayElement(['onboarding', 'active', 'honorary', 'inactive'] as const),
      password: "password"
    }
  }).build()
