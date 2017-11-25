export class Livro {
    id: number
    titulo: string
    autor: string
    anoPublicado: number
    preco: string
    nota: string

    static parseBook(item : any) {
        return {
            id: item.id,
            titulo: item.title,
            autor: item.author,
            anoPublicado: item.yearPublished,
            preco: item.price,
            nota: item.rating
        };
    }
}