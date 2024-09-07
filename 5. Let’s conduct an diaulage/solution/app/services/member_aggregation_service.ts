import Member from '#models/member'
import db from '@adonisjs/lucid/services/db'

export default class MemberAggregationService {
  async byStatusAndIndexRange(range:number=10000) {
    const members = await Member.query()
      .select(
        db.raw(`count(*), status,(index/${range})::int*${range} start, ((index/${range})+1)::int*${range} end`)
      )
      .groupByRaw(`(index/${range})::int, status`)

    return members.map((member) => ({ status: member.status, ...member.$extras }))
  }
}
