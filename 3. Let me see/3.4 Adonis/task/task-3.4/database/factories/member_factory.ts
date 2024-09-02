import factory from '@adonisjs/lucid/factories'
import Member from '#models/member'

export const MemberFactory = factory
  .define(Member, async ({ faker }) => {
    const statuses: ('ACTIVE' | 'NOT_ACTIVE' | 'NEW' | 'HONORED')[] = ['ACTIVE', 'NOT_ACTIVE', 'NEW', 'HONORED'];
    return {
      index: Math.floor(100000 + Math.random() * 900000),
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      status: statuses[Math.floor(Math.random() * statuses.length)]
    }
  })
  .build();