# Lab 02: Playwing Nx Plugins, Generators & Executors (Basic)

## Lab Setup

1. Copy `../lab-common/nx-empty-monorepo.zip` into this lab folder and Unzip it
2. Open `workspace/` folder in VSCode or IDE of choice
3. Run `npm ci` to install  necessary **NPM** dependencies

> ⚠️ Before you start
>
> Please open the `package.json` in `workspace/` and **note** the version of `"nx"` package from the `devDependencies` section.
>
> In this lab, we will add addtional `"@nx/*"` packages, and it is **highly recommended** to use **the same version** as `"nx"` for all of them.
>
> If your `"@nx/*"` versions do not match the version of `"nx"` in your repository, you can encounter some **difficult to debug errors**.
>
> So always [Keep Nx versions in sync!](https://nx.dev/recipes/tips-n-tricks/keep-nx-versions-in-sync)

## Installing plugins in the workspace

### Install the `@nx/angular` plugin as a dev dependency

1. Open a Terminal
2. Run "`npm install --save-dev @nx/angular@<VERSION_OF_NX_PKG>`"
3. Open `package.json` and inspect what has changed
4. Commit the changes (for e.g with `git add --all && git commit -m "chore: add '@nx/angular' plugin"`)

### Install the `@nxrocks/nx-spring-boot` plugin as a dev dependency

1. Open a Terminal
2. Run "`npm install --save-dev @nxrocks/nx-spring-boot@latest`"
3. Open `package.json` and inspect what has changed
4. Commit the changes (for e.g with `git add --all && git commit -m "chore: add '@nxrocks/nx-spring-boot' plugin"`)

## Using generators and executors

### Generating an Angular application

1. Open a Terminal
2. Run "`npx nx generate @nx/angular:application`" and answer the prompts
    * Application Name: `ngapp`
    * Leave the default options as-is
3. Inspect what has changed after running the generator
4. Commit the changes (for e.g with `git add --all && git commit -m "chore: generate basic angular application"`)

#### Building the Angular application

1. Open a Terminal
2. Run `build` executor with "`npx nx build ngapp`" 
3. Run again `build` executor to see **computation caching** in action

#### Testing the Angular application

1. Open a Terminal
2. Run `test` executor with "`npx nx run ngapp:test`" (using the long `run`command)
3. Run again `test` executor to see **computation caching** in action

#### Serving the Angular application

1. Open a Terminal
2. Run `serve` executor with "`npx nx serve ngapp`"
3. Open the link http://localhost:4200 

### Generating a Spring Boot application

1. Open a Terminal
2. Run "`npx nx generate @nxrocks/nx-spring-boot:project`" and answer the prompts
    * Project Name: `bootapp`
    * Project Type: `application`
    * Leave the default options as-is
    * Dependencies : `web`, `data-jpa`, `h2`, `actuator`, `devtools` (you can use the search)
3. Inspect what has changed after running the generator
4. Commit the changes (for e.g with `git add --all && git commit -m "chore: generate basic angular application"`)

#### Building the Spring Boot application

1. Open a Terminal
2. Run `build` executor with "`npx nx build bootapp`"
3. Run again `build` executor to see **computation caching** in action

#### Testing the Spring Boot application

1. Open a Terminal
2. Run `test` executor with "`npx nx run bootapp:test`" (using the longer `run` command)
3. Run again `test` executor to see **computation caching** in action

#### Serving the Spring Boot application

1. Open a Terminal
2. Run `serve` executor with "`npx nx serve bootapp`"
3. Open the link http://localhost:8080
