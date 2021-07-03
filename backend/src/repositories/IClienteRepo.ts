import { Cliente } from "../entities/Cliente";

export interface IClienteRepo {
  findByName(name: string): Promise<Cliente[]>;
  findByCPF(cpf: string): Promise<Cliente>;
  findByEmail(email: string): Promise<Cliente[]>;
  index(): Promise<Cliente[]>;

  validatePass(email: string, password:string): Promise<boolean>;

  create(cliente: Cliente): Promise<void>;
  update(cliente: Cliente): Promise<void>;
}
