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




## WEB API

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
