# 💵 Convert my money

   
[![Welcome](/convert-my-money.png?raw=true)](https://qr-code-currl.vercel.app/api?url=https://www.figma.com/file/tnR5qeYy5AcLC65AvMs56p/Untitled?node-id=0%3A1)

📋 This project is the source code made by Visual Studio code where I commit to Github to upload to Vercel, available at:  - [vercel.com (https://vercel.com/)] Access the website see the project online ➡ ( https://convert-my-money-iota.vercel.app/ )


[![HitCount](https://hits.dwyl.com/ThiagoFullStack//Curriculum.svg)](https://qr-code-currl.vercel.app/api?url=https://www.figma.com/file/tnR5qeYy5AcLC65AvMs56p/Untitled?node-id=0%3A1)


## 🎉 Start

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### 📝 Pré-requisitos:

You need NodeJS and NPM installed on your machine.

```
npm install init -y 
npm install express ejs  



vercel adopted a more elaborate security policy, so we need to define the routes.
To solve this is simple:

- Create a vercel.json file at the root of the project (where the package.json is) and add the content:
  ↪ 🛑 OBS:{
{
    "version": 2,
    "builds": [
        {
            "src": "index.js",
            "use": "@now/node-server"
        }
    ],
    "routes": [
        {
            "src": "/(.*)",
            "dest": "/"
        },
        {
            "src": "/",
            "dest": "/index.js",
            "methods": [
                "GET"
            ]
        },
        {
            "src": "/cotacao",
            "dest": "/index.js",
            "methods": [
                "GET"
            ]
        }
    ]
}
]}



npm run to test (run the project in the cmder ✔)

npm install --save-dev jest.
npm test (to test).


```

## 📁 Layout:

Criamos o layout utilizando o Figma. Você pode encontrar o arquivo [aqui](https://www.figma.com/file/dPEPhRFlIpslObChaBsIrsOs/ConvertMyMoney?node-id=1%3A2).

## 📢 Built with:

* [Express](https://expressjs.com/pt-br/) -The Node Framework.
* [Figma](https://www.figma.com/) - Online prototyping tool.
rapidly building custom designs.
* [Vercel](https://vercel.com/) - Online prototyping tool.


## 🎮🎧 Author: ⚽💻 

* 😎 **Thiago Caetano** - [LinkedIn](https://www.linkedin.com/in/thiagocb2-developer-fullstack/)

## 🧾 License

This project is licensed under the MIT license - veja [LICENSE.md](LICENSE.md) for more information.

## 👨‍🎓 Acknowledgments 🎉

* This project was built during the classes of the Fullstack Master of [DevPleno](https://devpleno.com).





