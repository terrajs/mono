# Quick start

## Prerequisites

You need [node](https://nodejs.org/) `>= 8.6.0` to use Mono since it uses native `async`/`await`.

## New project

It is recommended to use [create-mono-app](https://github.com/mono-js/create-mono-app), which helps creating new Mono app in seconds:

```
npx create-mono-app <my-mono-app>
```

If you use `npm` 5.1 or earlier, you can't use `npx`. Instead, install `create-mono-app` globally:

```
npm install -g create-mono-app
create-mono-app <my-mono-app>
```

Then answer the prompts as follows:

```
? What is the name of your new Mono app? my-mono-app
? How would you descripe your Mono app? Grand app with Mono
? Do you want to use ESLINT? yes
? Do you want to use MongoDB in your app? yes
```

It will setup your project, initialize a git repository and install all the required dependencies.

> By using `create-mono-app`, you make sure to have all the necessary tools to start building your Web API without any configuration following the [best practices](https://github.com/i0natan/nodebestpractices) for Node.js applications.

### Starting the project

Let's start our newly created Mono application:

```
cd <my-mono-app>
npm run dev
```

In a browser, visit [http://localhost:8000/_](http://localhost:8000/_) to try it out.

Mono comes with some built-in routes, the documentation is available in the [routes section](/routes?id=built-in-routes).

## Project structure

It structurates your project as follows:

```
├── conf
│   ├── application.js
│   ├── development.js
│   ├── production.js
│   └── test.js
├── src
│   ├── hello
│   │   ├── hello.acl.js
│   │   ├── hello.init.js
│   │   └── hello.routes.js
│   └── todos
│       ├── todos.controller.js
│       ├── todos.routes.js
│       ├── todos.service.js
│       └── todos.validation.js
└── test
    └── api.test.js
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .travis.yml
├── package-lock.json
├── package.json
├── README.md
```

#### conf/

This is where your app configuration lives, a basic config is already generated, so you can update it right away.

The documentation is available in the [configuration section](/configuration).

#### src/

This is where you will write your API routes, controllers, services and awesome features.

You can take a look at the different file types documentation:

- [*.routes.js](/routes)
- [*.init.js](/init-files)
- [*.acl.js](/acl)

#### test/

An `api.test.js` file is generated in order to test the generated *hello* and *todos* resources, it uses [mono-test-utils](https://github.com/mono-js/mono-test-utils) to facilitate API tests with Mono.

### Scripts

It will create a `package.json` with some scripts:

```json
{
  "scripts": {
    "dev": "mono dev",
    "start": "cross-env NODE_ENV=production mono",
    "lint": "eslint src/ conf/ test/",
    "test": "npm run lint && nyc ava --verbose --serial --fail-fast test/ && nyc report --reporter=html",
    "coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov"
  }
}
```

#### dev

Run `mono` in development mode.

This binary abstracts the creation of a `server.js` entry file and uses `nodemon` to provide live reload.

#### start

Run `mono` binary in production with `NODE_ENV=production` using `cross-env` in order to make life easier for Windows users.

#### lint

Run [ESLint](https://eslint.org) in your code located in `src/`, `conf/` and `test/` directories.

#### test

Run the tests with coverage.

The CLI will setup all you need to have to start testing right away with [ava](https://github.com/avajs/ava) and [nyc](https://github.com/istanbuljs/nyc) to have coverage report when the tests are done.

Learn more in the [testing section](/testing).

#### coverage

Run the coverage and uses and [codecov](https://github.com/codecov/codecov-node) to upload it to [Codecov.io](https://codecov.io).

## Mono commands

> These commands has to be used inside your `package.json` since you should not install Mono globally.

#### mono dev

Run Mono with [nodemon](https://github.com/remy/nodemon) and watch for files changes, you can write `rs` inside the terminal to restart `mono dev`.

#### mono

Run Mono without nodemon, you should set NODE_ENV to specify in which environement you want your Mono app to run.
