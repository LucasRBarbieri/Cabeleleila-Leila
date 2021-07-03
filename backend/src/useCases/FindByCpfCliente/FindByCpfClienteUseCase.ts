import { IClienteRepo } from "../../repositories/IClienteRepo";

export class FindByCpfClienteUseCase{
    constructor(
        private clienteRepo: IClienteRepo
    ){

    }

    async execute(cpf){
        return await this.clienteRepo.findByCPF(cpf)
    }
}