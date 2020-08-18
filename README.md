# Nodejs Expressjs API Project For SpaceX launches
[![Author](http://img.shields.io/badge/author-@pankajp4-blue.svg)](https://www.linkedin.com/in/pankajpandeyp4/)

A ready-to-use boilerplate for SpaceX REST API with Node.js, Express


## About SpaceX-NodeJS-Demo-App

SpaceX-NodeJS-Demo-App would help users list and browse all launches by SpaceX program.


## Getting started

This is a basic API skeleton written in NodeJs-Express framework.

This project will run on **NodeJs** using **Express** as framework. I had tried to maintain the code
structure easy to understand & maintain. Project is open for suggestions & bugs can be reports as well.


## Features

-   Basic Authentication (JWT based - not checking anything but valid signed JWT token is required
    to call APIs)
-   JWT Tokens, make requests with a token with `Authorization` header with value `Bearer yourToken`.
-   Pre-defined response helper with proper status, message & http response codes.
-   Included CORS.
-    **SpaceX** API with **GET** operations.
-   API params validations for all API calls.
-   Included API collection for Postman.
-   Light-weight & well documented project.
-   Test cases with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/).
-   Linting with [Eslint](https://eslint.org/).

## Software Requirements

-   Node.js **10+**
-   Express **4+**

## How to install

### Using GIT (recommended)

1.  Clone the project from github. You can change "spaceXAPIProject" to any other name.

```bash
git clone https://github.com/pankajp4/SpaceX-NodeJS-Demo-App.git ./spaceXAPIProject
```

### Using manual download from GIT as ZIP

1.  Download repo ZIP
2.  Uncompress to your desired directory


### Install NPM dependencies after installing (same for GIT or manual download)

```bash
cd spaceXAPIProject
npm install
```
## Project Structure
```sh
├── bin
│   └── www
├── controllers
│   ├── SpaceXController.js
├── helpers
│   ├── APICallHelper.js
│   ├── apiResponseHelper.js
│   ├── satLaunchHelper.js
├── middlewares
│   ├── jwt.js
├── models
│   ├── launchDummyData.json
├── postman-collection
│   ├── SpaceX-NodeJS-Demo-App.postman_collection.json
├── public
│   ├── assets
│       ├── css
│         └── style.css
│       ├── icons
│         └── favicon.ico
│       ├── images
│         ├── satellites
│         ├── DemoSat.png ...etc.
│       ├── js
├── routes
│   ├── api.js
│   ├── index.js
│   └── spaceX.js
│   └── ssr.js
├── test
│   ├── spaceX.spec.js
│   └── testConfig.js
├── views
│   ├── partials
│       ├── filters.ejs
│       ├── footer.ejs
│       ├── header.ejs
│       └── satListing.ejs
│   ├── utils
│       └── uiUtils.ejs
│   ├── filterWithSatListing.js
│   └── launchProgram.ejs
├── .env
├── .eslintrc.json
├── .gitignore
├── app.js
├── package.json
└── README.md
```


## How to Run

### Running Structured API server locally on PORT - 3001

```bash
npm run dev
```

If everything goes well then you will see below output for `npm run dev` command

```bash
> SpaceX_NodeJS_Demo_App@1.0.0 dev /Users/techjini/ProjectData/SpaceX-NodeJS-Demo-App
> nodemon ./bin/www

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node ./bin/www`

Press CTRL + C to stop the process.
```


## Tests

### Covered Test Cases

```sh
├── Covered API test cases:
│   ├── /GET SpaceX launches API - Authorization
│   ├── /GET SpaceX launches API - Success
│   └── /GET SpaceX launches API - Validations
```

### Running Test Cases

```bash
npm test
```

If everything goes well then you will see below output for `npm test` command


## ESLint

### Running Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements.
