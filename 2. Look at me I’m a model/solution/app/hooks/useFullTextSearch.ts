import { BaseModel } from "@adonisjs/lucid/orm"

function useFullTextSearch<T extends typeof BaseModel>(model: T, fields: string[]) {
    async function search(filter: string): Promise<InstanceType<T>[]> {
        const query = model.query()
        query.where(q => {
            q.whereLike(fields[0], `%${filter}%`)
            for (const i of fields.slice(1)) {
                q.orWhereLike(i, `%${filter}%`)
            }
        })

        return await query
    }

    return search
}

export default useFullTextSearch 