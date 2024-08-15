import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'solvro_members'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('index').primary()
      table.string('first_name', 100).notNullable()
      table.string('last_name', 100).notNullable()
      table.enum('status', ['Active', 'Inactive', 'Trainee', 'Honorary'], {
        useNative: true,
        enumName: 'member_status',
        existingType: false
      }).nullable()
    })
  }

  async down() {
    //droping TYPE not working, idk why -> cannot run migration:fresh
    //okay - lack of semicolon at the end was the problem...
    //interesting, because in docs there is no semicolon
    //https://lucid.adonisjs.com/docs/table-builder#enum--enu
    //UPDATE: semicolon wasn't the problem, idk what is, but raw SQL doesnt work
    //        so I need to run migration:fresh with --drop-types flag
    this.schema.dropTable(this.tableName)
    this.schema.raw('DROP TYPE IF EXISTS "member_status"')
  }
}