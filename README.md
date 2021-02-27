# Angular-Node-Typescript

## :bookmark: Table of Contents
- [Built with](#hammer-built-with)
- [Tools and Technologies](#gear-tools-and-technologies)
- [Feature List](#bookmark-feature-list)
- [Installation](#installation)
- [Run and Test](#run)
- [Database Seeding](#floppy_disk-database-seeding)

## :hammer: Built with
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Passport](http://passportjs.org/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Angular](https://angular.io/)
- [Bootstrap](http://www.getbootstrap.com/)

## :gear: Tools and Technologies
- [Angular CLI](https://cli.angular.io/)
- [Docker](https://www.typescriptlang.org/)
- [Heroku](https://expressjs.com/)
- [Prettier](https://www.mongodb.com/)

# :bookmark: Feature List
* User  
  * Registration
  * Login
  
##  Installation
1. Install [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com)
2. Install Angular CLI: `npm i -g @angular/cli`
3. From project root folder install all the dependencies: `npm i`

## Run

### Development mode

`npm run dev`: [concurrently](https://github.com/kimmobrunfeldt/concurrently) execute MongoDB, Angular build, TypeScript compiler and Express server.

A window will automatically open at [localhost:4200](http://localhost:4200). Angular and Express files are being watched. Any change automatically creates a new bundle, restart Express server and reload your browser.

### Production mode

`npm run prod`: run the project with a production bundle and AOT compilation listening at [localhost:3000](http://localhost:3000)

### Docker

1. `docker-compose up`
2. Go to [localhost:3000](http://localhost:3000)

### Running tests

Run `ng test` to execute the frontend unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Run `npm run testbe` to execute the backend tests via [Mocha](https://mochajs.org/) (it requires `mongod` already running).

### Running linters

Run `npm run lint` to execute [TS linting](https://github.com/palantir/tslint), [HTML linting](https://github.com/htmlhint/HTMLHint) and [SASS linting](https://github.com/sasstools/sass-lint).

## :floppy_disk: Database Seeding
$ npm run seed

### Author

- [Nazmul Ahsan](https://github.com/tarekahsan709)
