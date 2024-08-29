import factory from '@adonisjs/lucid/factories'
import ClubMember from '#models/club_member'

export const ClubMemberFactory = factory
  .define(ClubMember, async ({ faker }) => {
    return {
      index: faker.number.int({min: 1, max: 999999}),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      status: faker.helpers.arrayElement(['Active', 'Inactive', 'Trainee', 'Honorary']) as 'Active' | 'Inactive' | 'Trainee'| 'Honorary',
    }
  })
  .build()