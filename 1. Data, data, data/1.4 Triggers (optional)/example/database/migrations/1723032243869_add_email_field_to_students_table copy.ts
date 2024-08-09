import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'students'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
        table.string('email').after('index').unique()
    })

    this.schema.raw("CREATE OR REPLACE FUNCTION generate_student_email() RETURNS TRIGGER AS $$ BEGIN NEW.email := CONCAT(NEW.index,'@student.pwr.edu.pl'); RETURN NEW; END; $$ LANGUAGE 'plpgsql';")
    this.schema.raw("CREATE TRIGGER generate_student_email_on_create BEFORE INSERT ON students FOR ROW EXECUTE PROCEDURE generate_student_email();")
  }

  async down() {
    this.schema.dropColumn('email')
    this.schema.raw('drop function generate_student_email() cascade;')
  }
}