// Árvore

class Node {
    constructor(value){
        this.value = value;
        this.esq = null;
        this.dir = null;
    }
}

class Arvore {
    constructor() {
        this.raiz = null
    }

    #insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.esq === null) {
                node.esq = newNode;
            } else {
                this.#insertNode(node.esq, newNode);
            }
        } else {
            if (node.dir === null) {
                node.dir = newNode;
            } else {
                this.#insertNode(node.dir, newNode)
            }
        }
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.raiz === null) {
            this.raiz = newNode;
        } else {
            this.#insertNode(this.raiz, newNode)
        }
    }

    MostrarPreOrdem(node = this.raiz, ordenados = []) {
        if (node !== null) {
            ordenados.push(node.value);
            this.MostrarPreOrdem(node.esq, ordenados);
            this.MostrarPreOrdem(node.dir, ordenados);
        }
        return ordenados;
    }

    MostrarEmOrdem(node = this.raiz, ordenados = []) {
        if (node !== null) {
            this.MostrarEmOrdem(node.esq, ordenados);
            ordenados.push(node.value);
            this.MostrarEmOrdem(node.dir, ordenados)
        }
        return ordenados;
    }

    MostrarPosOrdem(node = this.raiz, ordenados = []) {
        if (node !== null) {
            this.MostrarPosOrdem(node.esq, ordenados);
            this.MostrarPosOrdem(node.dir, ordenados);
            ordenados.push(node.value);
        }
        return ordenados;
    }

    inverterArvore(node = this.raiz) {
        if (node !== null) {
            [node.esq, node.dir] = [node.dir, node.esq];
            this.inverterArvore(node.esq);
            this.inverterArvore(node.dir);
        }
    }
}

const arvore = new Arvore();

// inserindo valores

arvore.insert("5")
arvore.insert("9")
arvore.insert("11")
arvore.insert("3")
arvore.insert("2")
arvore.insert("4")


//  ordenando os valores

const valoresPreOrdem = arvore.MostrarPreOrdem()
const valoresEmOrdem = arvore.MostrarEmOrdem()
const valoresPosOrdem = arvore.MostrarPosOrdem()

console.log("Pré-Ordem")
console.log(valoresPreOrdem)

console.log("Em Ordem")
console.log(valoresEmOrdem)

console.log("Pós-Ordem")
console.log(valoresPosOrdem)

// invertendo a árvore

arvore.inverterArvore();

const invertidoEmOrdem = arvore.MostrarEmOrdem();
console.log("'Em Ordem' depois de inverter")
console.log(invertidoEmOrdem)