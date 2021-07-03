export class Agendamento {
  public id_agendamento: string;
  public cpf_cliente: string;
  public data_agendamento: Date;
  public duracao: number;
  public status: string;

  constructor(props: Agendamento) {
    Object.assign(this, props);
  }
}
