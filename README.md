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
-   Pre-defined `response helper` with proper status, message & http response codes.
-   Pre-defined `APICall helper` with promise.
-   Included CORS. (only configured not in use)
-    **SpaceX** API with **GET** operations.
-   API `params validations` for all API calls.
-   Included API `collection for Postman`.
-   Light-weight & well documented project.
-   Test cases with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/), `8 cases` covered.
-   Linting `(100% covered)` with [Eslint](https://eslint.org/).
-   Build and Packaging with [Grunt](https://gruntjs.com/) task runner (uglify, cssmin, imagemin & copy).


## Continuous Deployment (CD) using [herokuapp](https://herokuapp.com/)
`develop` branch is set for `Automatic deploys`

### App running @ [https://spacex-nodejs-demo-app.herokuapp.com/](https://spacex-nodejs-demo-app.herokuapp.com/)


## Lighthouse Score (97.5 out of 100)

### Idividual Scores
```bash
Performance: 94
Accessibility: 96
Best Practices: 100
SEO: 100
```

![Lighthouse Score](https://spacex-nodejs-demo-app.herokuapp.com/assets/images/lighthouse-score.png)

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
├── build (production reaqdy code will be here)
├── postman-collection
│   └── SpaceX-NodeJS-Demo-App.postman_collection.json
├── src
│   ├── controllers
│   │   └── SpaceXController.js
│   ├── helpers
│   │   ├── APICallHelper.js
│   │   ├── apiResponseHelper.js
│   │   └── satLaunchHelper.js
│   ├── middlewares
│   │   └── jwt.js
│   ├── models
│   │   └── launchDummyData.json
│   ├── public
│   │   ├── assets
│   │   │   ├── css
│   │   │   │   └── style.css
│   │   │   ├── icons
│   │   │   │   └── favicon.css
│   │   │   ├── images
│   │   │   │   ├── satellites
│   │   │   │   │   ├── DemoSat.png ...etc.
│   │   │   ├── js
│   ├── routes
│   │   ├── api.js
│   │   ├── index.js
│   │   ├── spaceX.js
│   │   └── ssr.js
│   ├── test
│   │   ├── spaceX.spec.js
│   │   └── testConfig.js
│   ├── views
│   │   ├── partials
│   │   │   ├── filters.ejs
│   │   │   ├── footer.ejs
│   │   │   ├── header.ejs
│   │   │   └── satListing.ejs
│   │   ├── utils
│   │   │   └── uiUtils.ejs
│   │   ├── filterWithSatListing.js
│   │   ├── launchProgram.ejs
│   ├── app.js
├── .env
├── .eslintrc.json
├── .gitignore
├── Gruntfile.js
├── package.json
└── README.md
```


## How to Build for Production

Grunt task runner with `uglify, cssmin, imagemin & copy` plugin is added. All JS, CSS, Images will be
minified and put inside `build` folder with similiar directory structure as `src`.

```bash
npm run build
```

If everything goes well then you will see below output for `npm run build` command

```bash
> SpaceX_NodeJS_Demo_App@1.0.0 build /Users/techjini/ProjectData/SpaceX-NodeJS-Demo-App
> grunt --force

Running "uglify:build" (uglify) task
>> 12 files created 20.16 kB → 9.96 kB

Running "cssmin:build" (cssmin) task
>> 1 file created. 2.48 kB → 1.66 kB

Running "imagemin:build" (imagemin) task
Minified 4 images (saved 343 kB - 25.3%)

Running "copy:build" (copy) task
Created 2 directories, copied 8 files

Done.
```


## How to Run

### Running App for development (with auto refresh) on PORT - 3001

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

### Running App for production on PORT - 3001

```bash
npm run start
```

If everything goes well then you will see below output for `npm run start` command

```bash
> SpaceX_NodeJS_Demo_App@1.0.0 start /Users/techjini/ProjectData/SpaceX-NodeJS-Demo-App
> node ./bin/www

Press CTRL + C to stop the process.
```


## Tests

### Covered Test Cases

```sh
├── Covered API test cases:
│   ├── /GET SpaceX launches API - Authorization
│   ├── /GET SpaceX launches API - Validations
│   ├── /GET SpaceX launches API - Success
│   ├── /GET SpaceX launches API - limit filter Success
│   ├── /GET SpaceX launches API - launch_year filter Success
│   ├── /GET SpaceX launches API - launch_success filter Success
│   ├── /GET SpaceX launches API - land_success filter Success
│   └── /GET SpaceX launches API - all filter Success
```

### Running Test Cases

```bash
npm run test
```

If everything goes well then you will see below output for `npm run test` command
```bash
> SpaceX_NodeJS_Demo_App@1.0.0 test /Users/techjini/ProjectData/SpaceX-NodeJS-Demo-App
> nyc _mocha 'src/test/**/*spec.js' --timeout 10000 --exit --report lcovonly -- -R spec

  SpaceX-NodeJS-Demo-App Automation Test Result:
    SpaceX /GET API Tests:
      ✓ It should send Authorization error for spaceX-launches GET call
      ✓ It should return validation errors for SpaceX launches GET call.
      ✓ It should generate SpaceX launches successfully for GET call.
      ✓ It should match limit param with data count for SpaceX launches GET call.
      ✓ It should match launch_year param with responses for SpaceX launches GET call.
      ✓ It should match launch_success param with responses for SpaceX launches GET call.
      ✓ It should match land_success param with responses for SpaceX launches GET call.
      ✓ It should match all param with responses for SpaceX launches GET call.


  8 passing (63ms)

-----------------------|---------|----------|---------|---------|-------------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
-----------------------|---------|----------|---------|---------|-------------------------
All files              |   85.28 |    38.89 |   55.81 |   85.57 |                         
 src                   |   85.29 |       25 |       0 |   85.29 |                         
  app.js               |   85.29 |       25 |       0 |   85.29 | 19,44,57,62-63          
 src/controllers       |   92.86 |      100 |     100 |   92.86 |                         
  SpaceXController.js  |   92.86 |      100 |     100 |   92.86 | 51                      
 src/helpers           |   59.38 |    78.57 |   38.46 |   58.62 |                         
  APICallHelper.js     |   33.33 |      100 |       0 |   33.33 | 14-28                   
  apiResponseHelper.js |   55.56 |      100 |   33.33 |   55.56 | 10-14,44-48,60-64,94-98 
  satLaunchHelper.js   |    87.5 |    78.57 |     100 |     100 | 12                      
 src/middlewares       |     100 |      100 |     100 |     100 |                         
  jwt.js               |     100 |      100 |     100 |     100 |                         
 src/routes            |   70.59 |        0 |       0 |   70.59 |                         
  api.js               |     100 |      100 |     100 |     100 |                         
  index.js             |   63.64 |        0 |       0 |   63.64 | 13-28                   
  spaceX.js            |     100 |      100 |     100 |     100 |                         
  ssr.js               |   53.85 |        0 |       0 |   53.85 | 13-31                   
 src/test              |     100 |      100 |     100 |     100 |                         
  spaceX.spec.js       |     100 |      100 |     100 |     100 |                         
  testConfig.js        |     100 |      100 |     100 |     100 |                         
-----------------------|---------|----------|---------|---------|-------------------------
```

## ESLint (100% coverage)

### Running Eslint

```bash
npm run lint
```

You can set custom rules for eslint in `.eslintrc.json` file, Added at project root.

## Bugs or improvements

Every project needs improvements, Feel free to report any bugs or improvements.
