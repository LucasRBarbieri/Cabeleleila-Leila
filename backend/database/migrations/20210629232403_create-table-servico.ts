import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("servico", (table) => {
    table.string('id_servico').notNullable();
    table.string('descricao').notNullable();
    table.decimal('duracao').notNullable();

    table.primary(['id_servico']);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("servico");
}

