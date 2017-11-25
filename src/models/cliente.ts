export class Cliente {
    id: number
    nomeCompleto: string
    nomeUsuario: string
    email: string
    telefone: string
    genero: string
    idade: number

    static parseClient(item : any) {
        return {
            id: item.id,
            nomeCompleto: item.fullName,
            nomeUsuario: item.username,
            email: item.email,
            telefone: item.phone,
            genero: item.gender,
            idade: item.age
        };
    }
}