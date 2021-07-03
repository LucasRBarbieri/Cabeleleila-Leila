import { connection } from "../../../database/connection";
import { Cliente } from "../../entities/Cliente";
import { IClienteRepo } from "../IClienteRepo";

export class ClienteRepo implements IClienteRepo {
  async findByName(name: string): Promise<Cliente[]> {
    return await connection("cliente")
      .select("*")
      .where("name", name)
      .from<Cliente>("cliente");
  }
  async findByCPF(cpf: string): Promise<Cliente> {
    return (
      await connection("cliente")
        .select("*")
        .where("cpf", cpf)
        .from<Cliente>("cliente")
    ).pop();
  }
  async findByEmail(email: string): Promise<Cliente[]> {
    return await connection("cliente")
      .select("*")
      .where("email", email)
      .from<Cliente>("cliente");
  }
  async index(): Promise<Cliente[]> {
    return await connection("cliente").select("*").from<Cliente>("cliente");
  }
  async validatePass(email: string, password: string): Promise<boolean> {
    return !!(
      await connection("cliente")
        .select("*")
        .where({ email, password })
        .from<Cliente>("cliente")
    ).pop();
  }
  async create(cliente: Cliente): Promise<void> {
    try {
      await connection("cliente").insert(cliente);
    } catch (error) {
      console.log(error);
    }
  }
  async update(cliente: Cliente): Promise<void> {
    try {
      await connection("cliente").where("cpf", cliente.cpf).update(cliente);
    } catch (error) {
      console.log(error);
    }
  }
}
