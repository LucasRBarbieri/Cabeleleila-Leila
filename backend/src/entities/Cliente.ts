export class Cliente {
  public cpf: string;
  public name: string;
  public phone: string;
  public email: string;
  public password: string;

  constructor(props: Cliente) {
    Object.assign(this, props);
  }
}
