# Lab 02: Nx Plugins, Generators & Executors in action

/!\ Before you start, please open the `package.json` in `workspace/` and note down the version of existing `@nx/*` packages present.

In the this lab, we will add new `"@nx/*"` dependencies, and it is recommended to use **the same version** to avoid compatibility issues.

/!\ The bellow instructions are for `VSCode`'s `Nx Console` integration, they might slightly defer if you are using a different editor (Intellij or Neovim)

0. Open `workspace/` folder in VSCode or IDE of choice

## Installing plugins in the workspace

### Install the `@nx/angular` plugin as a dev dependency

1. Open a Terminal
2. Run "`npm install --save-dev @nx/angular@<VERSION_OF_NX_PKG>`"
3. Open `package.json` and inspect what has changed
4. Commit the changes (for e.g with `git add -A && git commit -m "chore: add '@nx/angular' plugin"`)

### Install the `@nxrocks/nx-spring-boot` plugin as a dev dependency

1. Open a Terminal
2. Run "`npm install --save-dev @nxrocks/nx-spring-boot@9.1.2`"
3. Open `package.json` and inspect what has changed
4. Commit the changes (for e.g with `git add --all && git commit --message "chore: add '@nx/angular' plugin"`)

## Using generators and executors

### Generating an Angular application

1. Open a Terminal
2. Run "`npx nx generate @nx/angular:application`" and answer the prompts
  * Application Name: `ngapp`
  * Leave the default options as-is
3. Inspect what has changed after running the generator
4. Commit the changes (for e.g with `git add . && git commit -am "chore: generate basic angular application"`)

#### Building the Angular application

1. Open a Terminal
2. Run `build` executor with "`npx nx build ngapp`" 
2. Run again `build` executor to see **computation caching** in action 

#### Serving the Angular application

1. Open a Terminal
2. Run `serve` executor with "`npx nx serve ngapp`" 
3. Open the link https://localhost:4200 

### Generating a Spring Boot application

1. Open a Terminal
2. Run "`npx nx generate @nxrocks/nx-spring-boot:project`" and answer the prompts
  * Project Name: `bootapp`
  * Project Type: `application`
  * Leave the default options as-is
3. Inspect what has changed after running the generator
4. Commit the changes (for e.g with `git add . && git commit -am "chore: generate basic angular application"`)

#### Building the Spring Boot application

1. Open a Terminal
2. Run `build` executor with "`npx nx build bootapp`" 
2. Run again `build` executor to see **computation caching** in action 

#### Serving the Angular application

1. Open a Terminal
2. Run `serve` executor with "`npx nx serve bootapp`" 
3. Open the link https://localhost:8080

