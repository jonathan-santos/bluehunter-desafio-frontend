export default class Livro {
    id: number
    titulo: string
    autor: string
    anoPublicado: number
    preco: string
    nota: string
}

export const ParseBook = (item) : Livro => {
    return {
        id: item.id,
        titulo: item.title,
        autor: item.author,
        anoPublicado: item.yearPublished,
        preco: item.price,
        nota: item.rating
    };
}