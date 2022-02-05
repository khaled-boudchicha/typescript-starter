import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('documents', (t: Knex.TableBuilder) => {
    t.increments('id').unsigned().primary();
    t.string('filename').notNullable();
    t.string('originalname');
    t.string('exefilename');
    t.string('uiid');
    t.string('mimetype');
    t.string('path');
    t.boolean('saved').defaultTo(false);
    t.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('documents');
}
