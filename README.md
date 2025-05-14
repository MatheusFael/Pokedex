# Pokédex ⚡

Uma Pokédex web feita em ReactJS + Vite, estilizada com FantaCSS, consumindo a [PokeAPI](https://pokeapi.co/) e com cache local via LocalStorage. Navegue pelos 151 Pokémon originais, veja detalhes, tipos, stats e movimentos!

![Pokédex Screenshot](./public/pokedex-preview.png) <!-- Adicione um printscreen do app aqui se quiser -->

## ✨ Funcionalidades

- Lista dos 151 Pokémon originais (Kanto)
- Busca por nome ou número
- Visualização dos detalhes: nome, número, tipos, stats, sprites e movimentos
- Modal com descrição dos movimentos (busca na PokeAPI)
- Cache dos dados no LocalStorage para navegação rápida
- Responsivo e com visual moderno/dark

## 🚀 Como rodar

```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev

# Acesse em http://localhost:5173
```

## 🗂 Estrutura

- `src/components/` — Componentes principais: SideNav, PokeCard, Header, Modal, TypeCard
- `src/utils/` — Funções utilitárias e lista dos Pokémon
- `public/pokemon/` — Sprites dos Pokémon (001.png, 002.png, ...)
- `src/fanta.css` — Estilos base do projeto (FantaCSS)
- `src/index.css` — Estilos customizados da Pokédex

## 🛠️ Tecnologias

- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [FantaCSS](https://github.com/jamezmca/fantacss)
- [PokeAPI](https://pokeapi.co/)
- [Font Awesome](https://fontawesome.com/) (ícones)

## 💾 Cache Local

Os dados dos Pokémon e dos movimentos são salvos no LocalStorage para evitar requisições repetidas e deixar a navegação mais rápida.

## 📁 Organização dos Componentes

- [`src/components/SideNav.jsx`](src/components/SideNav.jsx): Navegação lateral com busca e seleção de Pokémon
- [`src/components/PokeCard.jsx`](src/components/PokeCard.jsx): Card com detalhes do Pokémon selecionado
- [`src/components/TypeCard.jsx`](src/components/TypeCard.jsx): Exibe o tipo do Pokémon com cor personalizada
- [`src/components/Modal.jsx`](src/components/Modal.jsx): Modal para exibir detalhes dos movimentos
- [`src/components/Header.jsx`](src/components/Header.jsx): Header responsivo para mobile

## 👨‍💻 Autor

Feito por Matheus Fael — [GitHub](https://github.com/MatheusFael)

---

> Projeto para estudos de React, consumo de API e estilização moderna.  
