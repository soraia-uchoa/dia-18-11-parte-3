import { readFile } from "fs/promises"

async function lerArquivo() {
    const file = './public/list2.txt'

    const arquivo = await readFile(file, { encoding: "utf8"})
    console.log(arquivo)

    const lista = arquivo.split("\n")
    console.log(lista)
}

lerArquivo()