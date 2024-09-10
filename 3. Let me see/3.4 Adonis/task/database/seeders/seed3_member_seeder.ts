import Member from '#models/member'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
    async run() {
        await Member.create({ index: "123554", first_name: "Jan", last_name: "Kowalski", status: "active" });
        await Member.create({ index: "17638", first_name: "Adam", last_name: "Młynarczyk", status: "active" });
        await Member.create({ index: "71368", first_name: "Grzegorz", last_name: "Dobrowolski", status: "active" });
        await Member.create({ index: "17386", first_name: "Anna", last_name: "Chwaliński", status: "active" });
        await Member.create({ index: "75613", first_name: "Bożena", last_name: "Kamiński", status: "active" });
    }
}