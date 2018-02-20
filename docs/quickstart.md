# Quick start

## Prerequisites

Install [Node.js](https://nodejs.org/) (version 8.x.x or higher) if not already installed on your machine to use Mono since it uses native async/await.

## New project

It is recommended to use `create-mono-app`, which helps creating new Mono app in seconds:

```
npx create-mono-app <my-mono-app>
```

If you use npm 5.1 or earlier, you can't use `npx`. Instead, install `create-mono-app` globally:

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

## Starting the project

Let's start your newly created Mono application:

```
cd <my-mono-app>
npm run dev
```

In a browser, visit [http://localhost:8000/_](http://localhost:8000/_) to try it out.

Mono comes with some default routes, the documentation is available in [routes.md](routes.md).

## Starter project

By using `create-mono-app`, you make sure to have all the necessary tools to start building your REST API without any configuration.

### Scripts

Mono CLI creates a default `package.json` with some scripts:

```js
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

This binary abstracts the creation of a `server.js` entry file

#### start

Run `mono` binary in production with NODE_ENV=production using `cross-env` in order to make life easier for Windows users.

#### lint

Run ESLint in your code based in `src/`, `conf/` and `test/`.

#### test

Run the tests with coverage.

The CLI will setup all you need to have to start testing right away with `ava`, `nyc` and `codecov`.

#### coverage

Run the coverage and uses `codecov` to upload it.

### Modules

Mono offers a module system to plug any functionality in your project.

You can see the full list of modules [here](modules.md).

When you create your app with the CLI, it asks you if you want to use MongoDB, which is

### Exemples

### Tests