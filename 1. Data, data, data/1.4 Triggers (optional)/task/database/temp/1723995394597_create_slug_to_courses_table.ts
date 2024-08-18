// /* eslint-disable prettier/prettier */
// import { BaseSchema } from '@adonisjs/lucid/schema'

// export default class extends BaseSchema {
//   protected tableName = 'create_slug_to_courses'

//   async up() {
//     this.schema.raw(`
//         CREATE OR REPLACE FUNCTION generate_url_slug()
//         RETURNS TRIGGER
//         LANGUAGE PLPGSQL
//         AS
//         $$
//         BEGIN
//           NEW.url := CONCAT('https://solvro/blog/', unaccent(trim(BOTH '-' FROM regexp_replace(lower(unaccent(trim(NEW.name))), '[^a-z0-9\\-_]+', '-', 'gi'))));
//           RETURN NEW;
//         END;
//         $$
//       `),
//       this.schema.raw(`
//         CREATE TRIGGER generate_url_slug_before_insert
//         BEFORE INSERT
//         ON courses
//         FOR EACH ROW
//         EXECUTE FUNCTION generate_url_slug();
//       `)
//   }

//   async down() {
//     this.schema.raw('DROP FUNCTION generate_url_slug() cascade;')
//   }
// }