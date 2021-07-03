import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("agendamento_servico", (table) => {
    table.string('id_agendamento').notNullable().references('id_agendamento').inTable('agendamento');
    table.string('id_servico').notNullable().references('id_servico').inTable('servico');

    table.primary(['id_servico', 'id_agendamento']);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("agendamento_servico");
}

