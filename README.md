# Travessia de árvore binária

##### Travessia é o precesso de acessar todos os nós da árvore de maneiras específicas, as três formas de travessia são:

##### 1. Pré-Ordem
- Visita a raiz
- Percorre o nó esquerdo
- Percorre o nó direito

## Exemplo de árvore
```mathematica
      4
     / \
    5   7
   / \   \
  3   9   2
```
##### Travessia Pré-Ordem:

➡ 4, 5, 3, 9, 7, 2

##### 2. Em Ordem
- Percorre o nó esquerdo
- Visita a raiz
- Percorre o nó direito

## Exemplo de árvore
```mathematica
      4
     / \
    5   7
   / \   \
  3   9   2
```

##### Travessia Pré-Ordem:

➡ 3, 5, 9, 4, 7, 2
##### 3. 
- Percorre o nó direito
- Percorre o nó esquerdo
- Visita a raiz

## Exemplo de árvore
```mathematica
      4
     / \
    5   7
   / \   \
  3   9   2
```
##### Travessia Pré-Ordem:

➡ 3, 9, 5, 2, 7, 4

##### 4. Inverção de árvore
- Percorre toda a árvore
- Inverte a posição dos filhos de cada nó

## Exemplo de árvore

```mathematica
      4
     / \
    5   7
   / \   \
  3   9   2
```

```mathematica
      A
     / \
    7   5
   /   / \
  2   9   3

```
## Aplicações da travessia de árvores binárias

##### Ela pode ser utilizada para percorrer uma árvore binária de busca e encontrar um determinado elemento, verificar se uma árvore binária é uma árvore de busca, realizar operações de exclusão ou inserção de nós em uma árvore binária, entre outras operações de manipulação de dados.

## Complexidade da travessia de árvores binárias

##### Em uma árvore binária completa, onde todos os níveis estão completamente preenchidos, a complexidade é O(n), onde n é o número de nós na árvore. No entanto, em uma árvore binária desbalanceada, onde um lado da árvore tem muitos mais nós do que o outro lado, a complexidade pode ser maior.

#  A implementação pode ser feita de forma recursiva ou iterativa. A travessia de árvore binária tem diversas aplicações práticas e sua complexidade depende do número de nós na árvore. 
