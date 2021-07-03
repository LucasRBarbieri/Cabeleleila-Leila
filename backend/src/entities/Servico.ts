export class Servico {
  public id_servico: string;
  public descricao: string;
  public duracao: number;

  constructor(props: Servico) {
    Object.assign(this, props);
  }
}
