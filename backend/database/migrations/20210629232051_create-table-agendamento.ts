import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("agendamento", (table) => {
    table.string('id_agendamento').notNullable();
    table.string('cpf_cliente').notNullable();
    table.date('data_agendamento').notNullable();
    table.decimal('duracao').notNullable();
    table.string('status').notNullable();

    table.primary(['id_agendamento']);
  });
}


export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable("agendamento");
}

