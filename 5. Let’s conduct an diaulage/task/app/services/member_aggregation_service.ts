import ClubMember from "#models/club_member";
import db from "@adonisjs/lucid/services/db";

export default class MemberAggregationService {
    async aggregateMembersByStatusAndIndexRange(indexRange: number = 50000) {
        const aggregateMembers = await ClubMember.query()
            .select('status')
            .select(db.raw('FLOOR(`index`/:range) * :range as min_index, (FLOOR(`index`/:range) + 1) * :range as max_index', 
                {range: indexRange}
            ))
            .count('* as total_members')
            .groupBy('status', 'min_index', 'max_index')
            
        return aggregateMembers.map((result) => ({status: result.status, ...result.$extras }))
    }
}