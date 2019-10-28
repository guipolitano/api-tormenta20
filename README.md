# Tormenta 20 API - Backend

Este é um sistema não-oficial feito com base no Sistema de RPG Tormenta 20.

O presente projeto foi feito como estudo de Node.JS, bem como para alimentar a parte [frontend do sistema](https://github.com/guipolitano/api-tormenta20-frontend).

Todas as informações exibidas pertencem a [Jambô Editora](https://jamboeditora.com.br/). E caso solicitado será removido imediatamente. Apoiem os criadores adquirindo o livro.

## Índice

1. [Tecnologias Utilizadas](#tecnologias-utilizadas)
2. [Demo](#demo)
3. [Instalação](#instalação)
4. [Rotas](#rotas)
    1. [Observações](#observações)
    2. [Classes](#classes)
    3. [Divindades](#divindades)
    4. [Habilidades](#habilidades)
    5. [Raças](#raças)
    6. [Perícias](#perícias)

## Tecnologias Utilizadas
- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [Repositório do Frontend](https://github.com/guipolitano/api-tormenta20-frontend);
- [Nodemon](https://nodemon.io/) (como dependência de desenvolvimento)

## Demo
-[Link para Demonstração do Frontend](https://api-tormenta20.herokuapp.com/)
-[Link para somente a API](https://tormenta20-api.herokuapp.com/)

## Instalação

Clone o projeto e use o npm ou yarn para instalar as dependencias

```bash
npm install
```
```bash
yarn install
```

## Rotas

#### Observações:

- Os atributos precedidos de dois-pontos(:) são parâmetros a serem passados na rota;
- As palavras compostas serão separadas com underline(_);
- Acentos não são aceitos nas rotas;
- Todas as rotas são do tipo GET;

Atualmente o projeto suporta as seguintes rotas:

#### Classes:
- "/classes" - Retorna todas as Classes;
- "/classes/:classe" - Retorna a classe do parâmetro. Ex.: classes/barbaro;
- "/classes/:classe/habilidades" - Retorna as Habilidades da classe do parâmetro. Ex.: classes/barbaro/habilidades;
- "/classes/:classe/tabela-nivel" - Retorna as Tabela de Nível da classe do parâmetro. Ex.: classes/barbaro/tabela-nivel;
- "/classes/:classe/proeficiencias/" - Retorna as Proeficiências da classe do parâmetro. Ex.: classes/barbaro/proeficiencias;
- "/classes/:classe/pericias/" - Retorna as Perícias da classe do parâmetro. Ex.: classes/barbaro/pericias;

#### Divindades:
- "/divindades" - Retorna todas as Divindades;
- "/divindades/:divindade" - Retorna a divindade do parâmetro. Ex.: divindade/valkaria;

#### Habilidades:
- "/habilidades" - Retorna todas as Habilidades;
- "/habilidades/:habilidade" - Retorna a habilidade do parâmetro. Ex.: habilidade/alta_arcana;

#### Raças:
- "/racas" - Retorna todas as Raças;
- "/racas/:raca" - Retorna a raça do parâmetro. Ex.: racas/humano;

#### Perícias:
- "/pericias" - Retorna todas as Perícias;
- "/pericias/:pericia" - Retorna a perícia do parâmetro. Ex.: pericias/atletismo;