<h1 align="center">Site Uniesp <img src="./public/uniesp.jpg" width="4%"/> </h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Projeto para avaliação da disciplina Tecnologia Para Front-end

### 🏠 [Homepage](http://localhost:5173/)

## Install

```sh
npm install
```

## Usage

```sh
npm run dev
```

## Use environment file (.env.local)

``` sh
VITE_NEWS_API=<back-end-url>
```

## Author

👤 **Jerson Brito**

* Website: linkedIn.com/in/jersonb
* Github: [@jersonb](https://github.com/jersonb)

## The Project

### Dependencies

#### [mui (Maretial Ui)](https://mui.com/)

Open source component library that implements Google's Material Design.

#### [axios](https://axios-http.com/)

Open source promise-based HTTP Client for node.js and the browser.

#### [react-dom](https://pt-br.react.dev/reference/react-dom)

The react project's native package for DOM manipulation.

#### [react-router](https://reactrouter.com/)

Open source library for React projects. Responsible for the SPA strategy, making changes to components via route calls.

#### [React](https://react.dev/)

Opens source JavaScript library that allows you to create user interfaces (UI) for web applications

#### [TypeScript](https://www.typescriptlang.org/)

Strongly typed programming language that builds on JavaScript, offering better tools at any scale.

### Structure and files

📂src
├─ 📂 api
│  └─ 📃 api.ts
├─ 📂 assets
├─ 📂 components
│  ├─ 📃 BannerAd.tsx
│  └─ 📃 Navbar.tsx
├─ 📂 pages
│  ├─ 📂 admin
│  │  ├─ 📃 AdminNews.tsx
│  │  ├─ 📃 CreateNews.tsx
│  │  └─ 📃 UpdateNews.tsx
│  ├─ 📃 College.tsx
│  ├─ 📃 Home.tsx
│  ├─ 📃 LawDataProtection.tsx
│  ├─ 📃 News.tsx
│  └─ 📃 ViewNews.tsx
└─ 📃 App.tsx

### WEB API

⚙️ **Contract comunication news json**

``` json
  {
    "title": "string",
    "subtitle": "string",
    "linkImage": "string",
    "content": "string"
  }
```

* **POST** : */api/news*
* **GET** : */api/news*
* **GET** : */api/news{id:uuid}*
* **PUT** : */api/news{id:uuid}*
* **DELETE** : */api/news{id:uuid}*

***

*This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)*
