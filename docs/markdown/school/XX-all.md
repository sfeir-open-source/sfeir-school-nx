<!-- .slide: class="two-column" -->

## Repositories

### **Training Slides**

![](assets/images/school/qr-school-nx-slides.png)

https://t.ly/3f7X8
<!-- .element: class="small" -->
##--##

## &nbsp;

### **Training Source code**

![](assets/images/school/qr-school-nx-repo.png)

https://t.ly/AyiAm
<!-- .element: class="small" -->


##==##

<!-- .slide: class="transition left" -->

# What is Nx?

##==##

<!-- .slide: class="quote-slide" -->

## <cite>What is Nx?</cite>

<blockquote cite=">https://nx.dev">
    <p style="line-height: 5rem;">
    Nx is a powerful open-source <strong>build system</strong> that provides <strong>tools</strong> and <strong>techniques</strong> for enhancing <strong>developer productivity, optimizing CI performance, and maintaining code quality</strong>.
    </p>
</blockquote>
<footer>— from <cite>https://nx.dev</cite></footer>

Notes:

Nx is an opensource tool that help your create and maintain your workspaces. It has first-class support for workspaces that contain multiple connected projects (monorepos), as well as for single-project workspaces. It is highgly extensible through plugins that bring support for various frameworks like Angular, React, Vue, etc or tools like Jest, Storybook, Cypress, etc.
It can automatically migrate the dependencies and code linked to the tools and frameworks it has either official or community support for.
It provides local/remote caching, paralleziation to help you save time, by caching and serving the result of already ran tasks or by running them in parallel.
It provides commands to help you understand and visualize how projects within your workspace are connected one with the other

##==##

<!-- .slide: class="transition top bg-white" -->

# meh? 🤔

##==##

<!-- .slide: class="two-column" -->

## What is Nx?

### 👉🏾 **OSS** Tool for managing **single-application** or **monorepo** projects

<br>

Nx was specifically designed as a tool to create and maintain **Monorepos** like done at Google's, Facebook's or Microsoft's

**monorepo** = a **single repository** containing multiple distinct projects, **with well-defined relationships**.

It has evolved since to support **single-application** workspaces too (since `v15.3.0`)

##--##

![](assets/images/school/monorepo-polyrepo.svg)

Notes:

- Explain quickly the difference between a monorepo vs a polyrepo
- Advantages of a monorepo
    - Everything at that current commit works together
    - Easy to split code into lib modules, easy to compose them
    - Easier dependency management
    - One build setup (AngularCLI)
    - Code editors and IDEs are “workspace” aware
    - Consistent developer experience

Sources:

- https://monorepo.tools/#what-is-a-monorepo
- https://nx.dev/getting-started/why-nx
- https://blog.nrwl.io/announcing-nrwl-nx-1-0-33d888666bfc

##==##

## What is Nx?

### 👉🏾 Nx offers integration with **modern tools** and **popular frameworks**

![center h-900](assets/images/school/nx-stack.png)

##==##

<!-- .slide: class="two-column" -->

## What is Nx?

### 👉🏾 Nx can **speed up tasks** like building, testing, linting both **locally** and on **CI**

![w-700](assets/images/school/local-computation-caching.svg)

* via **Computation Caching**

##--##

## &nbsp;

### &nbsp;

![w-800](assets/images/school/local-task-orchestration.svg)

* via **Task  Parallization and Distribution**

##==##

## What is Nx?

### 👉🏾 Nx helps you **explore and visualize** your workspace 

![full-center](assets/images/school/workspace-analysis.svg)

##==##

## What is Nx?

### 👉🏾 Nx can **enforces constraints and best practices** within your workspace

![full-center](assets/images/school/project-constraints-and-visibility.svg)

Notes:

- https://monorepo.tools/#explicit-project-constrains

Supports definition of rules to constrain dependency relationships within the repo. For instance, developers can mark some projects as private to their team so no one else can depend on them. Developers can also mark projects based on the technology used (e.g., React or Nest.js) and make sure that backend projects don't import frontend ones.

##==##

## What is Nx?

### 👉🏾 Nx eases **code sharing**, **code generation** within your workspace

<br>
<div class="flex-row">
<img class="w-900" src="./assets/images/school/source-code-sharing.svg">
<img class="w-900" src="./assets/images/school/code-generation.svg">
</div>

##==##

## What is Nx?

### 👉🏾 Nx is an **healthy**, very **actively maintained** OSS project

![w-1000 full-center](assets/images/school/nx-project-health.png)

##==##

<!-- .slide: class="two-column" -->

## Nx History

- First version: 1.0, in **April 2018**

- Created by **Victor Savkin** & **Jeff Cross**

    - ex-**Google**rs,

    - ex-**Angular** core team members

- Written in **Typescript**, **Javascript**, & **Rust**

- Current version: 17.2.x, since **December 2023**

##--##

## Nx Founders

![center](assets/images/school/nx-founders.png)

Notes:
- Mention that Victor Savkin designed the Routing Module of Angular
- Mention that some of core modules (like the file hasher, the hash comparison ) of Nx are written in Rust language for better performances

##==##

## Nx Core team

![w-1000 center](assets/images/school/nx-team-1.png)


Notes:

- Mention that manay of Nx Core team members are:
    - Google Developer Experts in Web, Angular 
    - Recognized opensource maintainers


##==##

## Nx Core team

![w-1000 center](assets/images/school/nx-team-2.png)

##==##

## Nx Core team

![w-1000 center](assets/images/school/nx-team-3.png)

Many are:
- **Google Developer Experts** for **Web**, **Angular**, etc ![ w-400](assets/images/school/gde.png)

- Popular **Opensource** projects **Contributors** (`Angular Three`, `RxJs`, `RxAngular`, `etc`)

<br>

##==##

<!-- .slide: class="transition left" -->

# Nx Ecosystem

##==##

![center h-1000](assets/images/school/nx-architecture.svg)

##==##

<!-- .slide: class="transition left" -->

# Nx Prerequesites

##==##

## Nx Prerequesites

Nx's CLI tools and packages are published as **node modules**, available for download on **NPM** 📦.

<br/>

This means a **NodeJS runtime** is needed to use Nx.
<br/>
<br/>

- Install **NodeJS** (preferably the latest `LTS` version) : https://nodejs.org/en/download
- Install **Git** (optional, but recommended) : https://git-scm.com/downloads

<br>
<div class="flex-row">
<img class="w-500" src="./assets/images/school/nodejs.png">
<img class="w-500" src="./assets/images/school/git.png">
</div>

##==##

<!-- .slide: class="transition left" -->

# Getting Started

##==##

<!-- .slide: class="with-code consolas" -->

## Getting Started

### Creating your **Nx workspace** (from Scratch)

```
$ npx --yes create-nx-workspace@latest
```
<!-- .element: class="big-code" -->

<br>

Some explanations:

<br>

* **`npx`** = Tool to download and execute any NodeJS-based executable (binary)
<br><br>
* **`--yes`** = Auto-confirm the downloading of the package if not yet present locally
<br><br>
* **`create-nx-workspace`** = Nx CLI to create new Nx workspaces. Available on NPM 📦
<br><br>
* **`@latest`** = The version of the CLI to use. Can be an exact version, like **`@16.8.0`** or **`@17`**


##--##


<!-- .slide: class="with-code consolas" -->

## Getting Started

### Alternative command to create/add **Nx workspace**

```shell
$ npx --yes nx@latest init
```
<!-- .element: class="big-code" -->

👉🏾 Use this to add Nx to an existing (NodeJS-based or not) workspace:

<br>

Nx will try to **automatically detects** the stack and will **interactively configure** itself:

* Existing **Angular CLI**-based project ?

* Existing **Create React App (CRA)**-based project ?

* Existing **Nest CLI**-based project ?

* Existing **Standard NodeJS**-based single or monorepo project ?

Notes:

You will be prompted to define for example:

<br>

* What commands do you want to cache ?

* Whether or not you want support for Nx Cloud for remote caching ?

* Etc

##==##
<!-- .slide: class="with-code consolas max-height" -->

## Getting Started

### Choosing your stack

```shell [6]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? … 
None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with modern tooling.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition left" -->
# Choosing your stack

##==##
<!-- .slide: class="with-code consolas max-height" -->

## Choosing your stack

### 👉🏾 First-class support for **Angular** with **modern tools**

```shell [10]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? … 
None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with modern tooling.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```
<!-- .element: class="big-code" -->

##--##

## Choosing your stack

### 👉🏾 First-class support for **Angular** with **modern tools**

![full-center h-900](assets/images/school/ng-stack.png)

##--##

## Choosing your stack

### 👉🏾 First-class support for **Angular** with **modern tools**

Will create an Angular application, like the  **Angular CLI**, but much more customizable:

<br>

* ✔ Choice of stylesheet format: `CSS`, `SCSS` or `LESS`

* ✔ Choice of Test runner to use for end to end (E2E) tests: `Cypress`, `Playwright`, or `None`

* ✔ Opt-in to use Standalone Components

* ✔ Opt-in to add routing

##--##

## Choosing your stack

### 👉🏾 First-class support for **Angular** with **modern tools**

![full-center h-900](assets/images/school/ng-cli-vs-nx.jpg)

Notes:

Like **_`Angular CLI`_**, but **waaaay more powerful** 💪🏾

##==##
<!-- .slide: class="with-code consolas max-height" -->

## Choosing your stack

### 👉🏾 First-class support for **React** with **modern tools**

```shell [8]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? … 
None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with modern tooling.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```
<!-- .element: class="big-code" -->

##--##

## Choosing your stack

### 👉🏾 First-class support for **React** with **modern tools**

![full-center h-900](assets/images/school/react-stack.png)

##--##

## Choosing your stack

### 👉🏾 First-class support for **React** with **modern tools**

Will create a React application, like the  **Create React App (CRA)**, but much more customizable:

<br>

* ✔ Choice of stylesheet format: `CSS`, `SCSS`, `LESS`, `Styled-Components`, `Emotion`, or `Styled-JSX`

* ✔ Choice of Test runner to use for end to end (E2E) tests: `Cypress`, `Playwright`, or `None`

* ✔ Choice of Bundler to use: `Webpack`, `Rspack`,  or `Vite`

* ✔ Choice of Framework to use: `React Native`, `Expo`, `Next.js`, or `None`

##==##
<!-- .slide: class="with-code consolas max-height" -->

## Choosing your stack

### 👉🏾 First-class support for **Vue** with **modern tools**

```shell [9]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? … 
None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with modern tooling.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```
<!-- .element: class="big-code" -->

##--##

## Choosing your stack

### 👉🏾 First-class support for **Vue** with **modern tools**

![full-center h-900](assets/images/school/vue-stack.png)

##--##

## Choosing your stack

### 👉🏾 First-class support for **Vue** with **modern tools**

Will create a Vue application, like the  **Create Vue CLI**, but much more customizable:

<br>

* ✔ Choice of stylesheet format: `CSS`, `SCSS` or `LESS`

* ✔ Choice of Test runner to use for end to end (E2E) tests: `Cypress`, `Playwright`, or `None`

##==##
<!-- .slide: class="with-code consolas max-height" -->

## Choosing your stack

### 👉🏾 First-class support for **Node** with **modern tools**

```shell [11]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? … 
None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with modern tooling.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```
<!-- .element: class="big-code" -->

##--##

## Choosing your stack

### 👉🏾 First-class support for **Node** with **modern tools**

![full-center h-900](assets/images/school/node-stack.png)

##--##

## Choosing your stack

### 👉🏾 First-class support for **Node** with **modern tools**

Will create a Node application, very customizable:

<br>

* ✔ Choice of Test runner to use for end to end (E2E) tests: `Cypress`, `Playwright`, or `None`

* ✔ Choice of Framework to use: `Express`, `Koa`, `NestJS`, `Fastify`, or `None`

* ✔ Opt-in to generate a `Dockerfile` containing the app for deployment

##==##
<!-- .slide: class="with-code consolas max-height" -->

## Choosing your stack

### 👉🏾 or do it later!

* You can start with No stack ( **None** stack)

* And add them later, using **Nx plugins** (more on that later)

##--##
<!-- .slide: class="with-code consolas max-height" -->


## Choosing your stack

### 👉🏾 or do it later!

```shell [7]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
? Which stack do you want to use? … 
None:          Configures a TypeScript/JavaScript project with minimal structure.
React:         Configures a React application with your framework of choice.
Vue:           Configures a Vue application with modern tooling.
Angular:       Configures a Angular application with modern tooling.
Node:          Configures a Node API application with your framework of choice.
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition left" -->

# Types of Nx workspaces

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Types of Nx workspaces

### Choosing your workspace type

```shell [7|8-10]
 $ npx --yes create-nx-workspace@latest

 >  NX   Let's create a new workspace [https://nx.dev/getting-started/intro]

✔ Where would you like to create your workspace? · myorg
✔ Which stack do you want to use? · none
? Package-based monorepo, integrated monorepo, or standalone project? … 
Package-based Monorepo:     Nx makes it fast, but lets you run things your way.
Integrated Monorepo:        Nx creates a monorepo that contains multiple projects.
Standalone:                 Nx creates a single project and makes it fast.
```
<!-- .element: class="big-code" -->

##==##

## Types of Nx workspaces

### **Package-based** Monorepos

A style of **monorepo**  that focus on **flexibility** and **ease of adoption**. 

<br>

* It allows you to maintain **separate `package.json`** files for **each project** within the repository

* Each project can have its own dependencies and define tasks in its own `package.json` file

* Projects are **linked locally** using `NPM`'s worspaces feature

##--##

<!-- .slide: class="with-code consolas max-height" -->

## Types of Nx workspaces

### **Package-based** Monorepos

The folder structure of such workspaces is as below:

```txt [1|2|3-5|6-8|9|10]
package-based-monorepo/
├── packages/
│   ├── package-a/
│   │   ├── index.ts
│   │   └── package.json
│   └── package-a/
│       ├── index.ts
│       └── package.json
├── nx.json
└── package.json
```
<!-- .element: class="big-code" -->

##--##

## Types of Nx workspaces

### **Package-based** Monorepos

<br>

👉🏾 Ideal when you already have a monorepo and want to primarily **leverage Nx for speed and task scheduling**. 

👉🏾 It **gives you more control** over the build system and dependency management for individual projects.

👉🏾 Good choice when adding Nx to an existing `NPM`, `Yarn`, or `PNPM` workspace

##==##

## Types of Nx workspaces

### **Integrated** Monorepos

A style of **monorepo**  that focus on **efficiency** and **ease of maintenance**. 

<br>

* It goes beyond the core features of Nx and utilizes **plugin features**.

* Projects are **linked using TypeScript path aliases** defined in the `tsconfig.base.json` file

##--##

<!-- .slide: class="with-code consolas max-height" -->

## Types of Nx workspaces

### **Integrated** Monorepos

The folder structure of such workspaces is as below:

```txt [1|2|3-5|6-8|9|10-12|13-15|16|17|18]
integrated-monorepo/
├── apps/
│   ├── app-a/
│   │   ├── index.ts
│   │   └── tsconfig.app.json
│   └── app-b/
│       ├── index.ts
│       └── tsconfig.app.json
├── libs/
│   ├── lib-a/
│   │   ├── index.ts
│   │   └── tsconfig.lib.json
│   └── lib-b/
│       ├── index.ts
│       └── tsconfig.lib.json
├── nx.json
├── tsconfig.base.json
└── package.json
```

##--##

## Types of Nx workspaces

### **Integrated** Monorepos

<br>

👉🏾 This style provides a **pre-configured setup** that scales well, with a single version of every dependency defined at the root

👉🏾 It offers features like **scaffolding new code**, **running tasks**, and **automated dependency updates**

👉🏾 Good choice when you want **more assistance from Nx**

Notes:

👉🏾 Good choice when you want **more assistance from Nx*, as it simplifies configuration, provides scaffolding support, and automates code migrations.

##==##

## Types of Nx workspaces

### **Standalone** Applications

Similar to **integrated monorepo**  but focus on one **single application** 

<br>

* It goes beyond the core features of Nx and utilizes **plugin features**.

* Projects are **linked using TypeScript path aliases** defined in the `tsconfig.base.json` file

##--##

<!-- .slide: class="with-code consolas max-height" -->

## Types of Nx workspaces

### **Standalone** Applications

The folder structure of such workspaces is as below:

```txt [1|2-6|7|8-9|10]
standalone-app/
├── src/
│   ├── index.ts
│   └── lib/
│       ├── file1.ts
│       └── file2.ts
├── nx.json
├── tsconfig.json
├── tsconfig.lib.json
└── package.json
```
<!-- .element: class="big-code" -->

##--##

## Types of Nx workspaces

### **Standalone** Applications

<br>

👉🏾 This style provides a **pre-configured setup** that scales well, with a single version of every dependency defined at the root

👉🏾 It offers features like **scaffolding new code**, **running tasks**, and **automated dependency updates**

👉🏾 Good choice when you want **focus on a single project** and do not require the benefits of a monorepo setup, while preserving Nx other features

##==##

## Types of Nx workspaces

### Still confused ? 🤔

* Don't worry!

* Choose what you _think_ is best for you now, you can still change later

* Nx provides **tutorials** and **tools** to help you in the process 😉

    * [Convert from a Standalone Repository to an Integrated Repository](https://nx.dev/recipes/tips-n-tricks/standalone-to-integrated)

    * [Add an Integrated Project in a Package-based Repository](https://nx.dev/recipes/tips-n-tricks/integrated-in-package-based)

    * [Add a Package-Based Project in an Integrated Repository](https://nx.dev/recipes/tips-n-tricks/package-based-in-integrated)

##==##

<!-- .slide: class="exercice" -->

# Creating empty Nx workspaces

## Lab 01

<br>

1. Open **`sfeir-school-nx/labs/lab-01/README.md`**
2. Follow the instructions

<br>
<br>

💡 Want to see all **available options** of the CLI?

### `npx create-nx-workspace@latest --help`

##==##

<!-- .slide: class="transition left" -->

# Main Configuration Files

##==##

<!-- .slide: class="with-code consolas" -->

## Main Configuration Files

### 👉🏾 **`nx.json`** : **Global-level** configuration file

Main file to configure **Nx CLI** and the projects contained in the entire Nx workspace

```json [3-5|6-10|11-14|15-25|26-29]
{
  "extends": "nx/presets/npm.json",
  "affected": {
    "defaultBase": "main"
  },
  "generators": {
    "@nx/js:library": {
      "buildable": true
    }
  },
  "namedInputs": {
    "default": ["{projectRoot}/**/*"],
    "production": ["!{projectRoot}/**/*.spec.tsx"]
  },
  "targetDefaults": {
    "build": {
      "inputs": ["production", "^production"],
      "dependsOn": ["^build"],
      "executor": "@nrwl/js:tsc",
      "options": {
        "main": "{projectRoot}/src/index.ts"
      },
      "cache": true
    }
  },
  "parallel": 4,
  "cacheDirectory": "tmp/my-nx-cache",
  "nxCloudAccessToken": "NjI2OGI5MzItNTBmZC00NjMzLWFjYmQtZDAwNTliNDc2NDMwfHJlYWQtd3JpdGU="
}
```

Notes:

https://nx.dev/reference/nx-json

* **affected** : Tells Nx which branch and HEAD to use when calculating affected projects.

* **namedInputs** : A named input in Nx is a configuration option that allows you to define and customize inputs for specific targets in your projects.

* **targetDefaults** : provideS ways to set common options for a particular target in your workspace

**namedInputs** and **targetDefaults** allow to reduce duplication of configuration options by allowing to reference 

##==##

<!-- .slide: class="with-code consolas" -->

## Main Configuration Files

### **`project.json`** : **Project-level** configuration file

👉🏾 Inherits settings from the **_`nx.json`_**

👉🏾 Takes precedence over the **_`nx.json`_**

```json [2|3|4|5|6|7-10|11-26]
{
  "root": "libs/mylib/",
  "sourceRoot": "libs/mylib/src",
  "projectType": "library",
  "tags": ["scope:myteam"],
  "implicitDependencies": ["anotherlib"],
  "namedInputs": {
    "default": ["{projectRoot}/**/*"],
    "production": ["!{projectRoot}/**/*.spec.tsx"]
  },
  "targets": {
    "test": {
      "inputs": ["default", "^production"],
      "outputs": [],
      "dependsOn": ["build"],
      "executor": "@nx/jest:jest",
      "options": {}
    },
    "build": {
      "inputs": ["production", "^production"],
      "outputs": ["{workspaceRoot}/dist/libs/mylib"],
      "dependsOn": ["^build"],
      "executor": "@nx/js:tsc",
      "options": {}
    }
  }
}
```

Notes:

Mention the similarity with the `project` section of `angular.json` from `Angular CLI` generated projects.

##--##

<!-- .slide: class="with-code consolas" -->

## Main Configuration Files

### **`package.json`** : Alternative **Project-level** configuration file

👉🏾 If you use **`npm` scripts** and not **Nx executors**

```json [2|3-7|8|9-26]
{
  "name": "mylib",
  "scripts": {
    "test": "jest",
    "build": "tsc -p tsconfig.lib.json", 
    "ignored": "exit 1"
  },
  "nx": {
    "namedInputs": {
      "default": ["{projectRoot}/**/*"],
      "production": ["!{projectRoot}/**/*.spec.tsx"]
    },
    "targets": {
      "build": {
        "inputs": ["production", "^production"],
        "outputs": ["{workspaceRoot}/dist/libs/mylib"],
        "dependsOn": ["^build"]
      },
      "test": {
        "inputs": ["default", "^production"],
        "outputs": [],
        "dependsOn": ["build"]
      }
    },
    "includedScripts": ["test", "build"] // If you want to limit the scripts Nx sees, you can specify a list here.
  }
}
```

##==##

<!-- .slide: class="transition left" -->

# Nx Plugins

##==##

<!-- .slide: class="quote-slide" -->

## <cite>Nx Plugins</cite>


<blockquote>
<cite>
<strong>Nx Plugins</strong> can be compared to <string>VScode Extensions</strong>.<br><br>
Just like VScode Extensions enhance the  core functionalities of the editor by providing additional features and capabilities,
<strong>Nx Plugins</strong> extend the capabilities of Nx by offering specific features and tools for different technologies.
</cite>
</blockquote>

Notes:  

Nx package provides fundamental **technology-agnostic** capabilities such as: 

* Workspace analysis
* Task running
* Caching
* Distribution
* Code generation 
* and Automated code migrations.

For example, just as you can install an extension in VScode to add support for a specific programming language or framework, you can install an Nx plugin to enhance Nx's capabilities for a particular technology stack. Nx plugins are optional packages that cater to specific technologies, such as Vue, Vite, Cypress, and more.

Similar to how VScode extensions provide additional features like linting, debugging, and code snippets, Nx plugins offer additional features that make development more efficient and enjoyable when working with specific tech stacks. These features can include generators, builders, schematics, and more, which help streamline development workflows and provide a better developer experience.

In summary, Nx plugins are like VScode extensions for Nx. They extend the capabilities of Nx by providing additional features and tools tailored to specific technologies, enhancing the development experience for those tech stacks.

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Plugins

👉🏾 Plugins are **NPM packages** 📦, available on NPM Registry or Locally

👉🏾 Can be added to existing workspace using the command:
<br>

```shell
$ npm install --save-dev <nx-plugin-name>
```
<!-- .element: class="big-code" -->

<br>
Examples:

```shell
$ npm install --save-dev @nx/angular  
$ npm install --save-dev @nx/react  
$ npm install --save-dev @nx/vue

$ npm install --save-dev @nxrocks/nx-spring-boot  
$ npm install --save-dev @nx-dotnet/core
```
<!-- .element: class="big-code" -->

##==##

## Nx Plugins

### 👉🏾 **Official** Plugins

* Created and maintained by **Nx Team**

* Automatically migrated along with Nx itself

* Package name starts with **`@nx/`** _(or **`@nrwl/`**, prior to `v15.3.x`)_

* Published on and available from NPM 📦

##--## 

![full-center](assets/images/school/official-plugins.png)

##==##

## Nx Plugins

### 👉🏾 **Community** Plugins

* Created and maintained by **Nx Community** ( You and me!)

* Approved by the **Nx Team**

* Not automatically migrated when Nx updates itself

  * Migration must be performed mannually


* Published on and available from NPM 📦

##--## 

![full-center](assets/images/school/community-plugins.png)

##==##

## Nx Plugins

### 👉🏾 **Local** (a.k.a **Workspace**) Plugins

* Created and maintained by **You and your team**!

* Not automatically migrated when Nx updates itself

  * Migration must be performed mannually

* Not Published on NPM 📦, and available **locally** from your workspace

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Plugins

### How to **discover** them?

* Run **_`nx list`_** within your workspace

```shell [1|6-14|15-25|27-44|46-50|52]
$ npx nx list

> nxrocks@0.0.0-development nx /workspaces/nxrocks
> nx "list"

 >  NX   Local workspace plugins:

   @nxrocks/nx-spring-boot (executors,generators)
   @nxrocks/nx-micronaut (executors,generators)
   @nxrocks/nx-flutter (generators)
   @nxrocks/nx-quarkus (executors,generators)
   @nxrocks/nx-melos (generators)
   @nxrocks/nx-ktor (executors,generators)

 >  NX   Installed plugins:

   @nx/devkit ()
   @nx/eslint-plugin ()
   @nx/jest (executors,generators)
   @nx/js (executors,generators)
   @nx/node (generators)
   @nx/plugin (executors,generators)
   @nx/workspace (executors,generators)
   @theunderscorer/nx-semantic-release (executors,generators)
   nx (executors,generators)

 >  NX   Also available:

   @nx/angular (executors,generators)
   @nx/cypress (executors,generators)
   @nx/detox (executors,generators)
   @nx/esbuild (executors,generators)
   @nx/expo (executors,generators)
   @nx/express (generators)
   @nx/eslint (executors,generators)
   @nx/nest (generators)
   @nx/next (executors,generators)
   @nx/react (executors,generators)
   @nx/react-native (executors,generators)
   @nx/rollup (executors,generators)
   @nx/storybook (executors,generators)
   @nx/vite (executors,generators)
   @nx/web (executors,generators)
   @nx/webpack (executors,generators)

 >  NX   Community Plugins

   Looking for a technology / framework not listed above?
   There are many excellent plugins maintained by the Nx community.
   Search for the one you need here: https://nx.dev/plugins/registry.

 >  NX   Use "nx list [plugin]" to find out more
```
##==##

## Nx Plugins

### How to **discover** them?

* https://nx.dev/plugin-registry 

![center](assets/images/school/plugins-registry.png)

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Plugins

### How to **create** them ?

Super easy 😉

👉🏾 Get Started Using the **dedicated CLI** :

```shell
$ npx --yes create-nx-plugin <your-nx-plugin-name>
```
<!-- .element: class="big-code" -->

<br>

👉🏾 Or Using the **dedicated plugin**  (if you already have a Nx workspace):

```shell
$ npm install --save-dev @nx/plugin@<version>(only needed once)
$ npx nx generate @nx/plugin:plugin <your-nx-plugin-name>
```
<!-- .element: class="big-code" -->

<br>

A **Devkit** package is available to help you write the code :

```shell
$ npm install --save-dev @nx/devkit
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition left" -->

# Nx Generators

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Generators

### Definition

***Generators*** are a way to automate tasks you regularly perform as part of your dev flow

Like:

* **scaffolding** out new components, features, or entire applications

* ensuring libraries are generated and structured in a certain way

* **updating** your configuration files

* **migrating** code

* _etc_

<br>
<br>

Generators help you **standardize** these tasks in a **consistent**, and **predictable** manner.

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Generators

### Definition

Similar to **schematics** in pure **`Angular CLI`**.

<br>

= a simple TS library exporting a  **default asynchronous function** that:

* Takes as _input parameters_:

  * a **Tree**, i.e an object (provided by Nx) that **virtuallly** represents the **File System**

  * (optional) an object containing options (provided by the User)

* Returns an **asynchronous result** (a _`Promise`_ of whatever you want, including _`void`_ )

Notes:

Mention that "generattors" in Nx == "schematics" in Angualar CLI

A code **generator** is a core feature of Nx.

##--##

<!-- .slide: class="with-code consolas" -->

## Nx Gnerators

### Definition

```typescript
import { Tree} from '@nx/devkit';

export default async function myGenerator(tree: Tree, options: any) {
  // any code here, sync or asynchronous, for example:
  //   creating new files from scratch or using a template,
  //   updating existing ones,
  //   invoking another generator (composition!)
  //   etc 
}

```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Generators

### Types of Generators

* **Plugin Generators** are available when an Nx plugin has been installed in your workspace.

* **Local** (_a.k.a_ **Workspace**) **Generators** are generators that you can create for your own workspace.

* **Update** (_a.k.a_ **Migration**) **Generators** are invoked by Nx plugins when you update Nx to keep your config files in sync with the latest versions of third party tools.

Notes:

* **Local Generators** allow you to codify the processes that are unique to your own organization.

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Generators

### Usage and Invocation

Generators are invoked using the _**`nx generate`**_ command.

```shell
$ npx nx generate [plugin]:[generator-name] [options] // for plugin generators

$ npx nx generate [generator-name] [options]          // for local generators
```
<!-- .element: class="big-code" -->

<br>

Examples

<br>

```shell
$ npx nx generate @nx/angular:component mycmp --project=myapp --style=scss

$ npx nx g @nx/plugin:generator mygenerator
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="transition left" -->

# Nx Executors

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Executors

### Definition

**Executors** or **task executors** perform actions on your code.

Like :

* **building**, i.e compiling your TS files into final JS files

* **linting**, i.e analysing your codebase to spot potential bugs, bad practices, etc

* **testing**, i.e running tests on your application or library

* **serving** your application from a development server

* **packaging** your application into a `Docker` image

* _etc_

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Executors

### Definition

<br>

= a simple TS library exporting a  **default asynchronous function** that:

* Takes as _input parameters_:

  * An object containing options (provided by the User)

* Returns an object **`{ success: boolean }`**

Notes:


##--##

<!-- .slide: class="with-code consolas" -->

## Nx Executors

### Definition

```typescript
import { BuildExecutorSchema } from './schema';

export default async function runExecutor(options: BuildExecutorSchema) {
  // your code here
  return { success: true };
}

```
<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code consolas" -->

## Nx Executors

### Usage and Invocation

A Nx **executor** must be associated to a **target** in the _**`project.json`**_

```json [7|8|9-12]
{
  "root": "apps/ngapp",
  "sourceRoot": "apps/bootapp/src",
  "projectType": "application",
  "generators": {},
  "targets": {
    "build": {
      "executor": "@nx/angular:browser-esbuild",
      "options": {
        "outputPath": "dist/apps/bootapp",
        ...
      },
    },
  }
}

```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Executors

### Usage and Invocation

Then, it is invoked using the _**`nx run`**_ command

```shell
$ npx nx run [project]:[task]
```
<!-- .element: class="big-code" -->

Examples:

```shell
$ npx nx run myproject:build 

$ npx nx run myproject:test

$ npx nx run myproject:package
```
<!-- .element: class="big-code" -->

##--##

<!-- .slide: class="with-code consolas" -->

## Nx Executors

### Usage and Invocation

Alternative (shortcut) command to run an executor:

```shell
$ npx nx [task] [project]
```
<!-- .element: class="big-code" -->

Examples:

```shell
$ npx nx build myproject

$ npx nx test myproject

$ npx nx package myproject
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# Nx Plugins, Generators & Executors in action (Basic)

## Lab 02

<br>

1. Open **`sfeir-school-nx/labs/lab-02/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="transition left" -->

# Nx Project & Task Graph

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Project Graph

### Definition

=  **Graph** representation of **dependencies** between **projects** within the workspace.

![center](assets/images/school/project-graph-updated.svg)

* **Explicit dependencies**  -> deducted by Nx (or its plugins) based on the files
* **Implicit dependencies** -> defined by the User, in the **_`project.json`_** or _**`nx.json`_**

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Project Graph

### Project dependencies

Nx (or a plugin)  uses various sources of information to create the graph of dependencies:

<br>

1. **Package dependencies** defined in the **_`package.json`_** file (natively supported by Nx)

```json
{
  "dependencies": {
    "@myorg/awesome-library": "*"
  }
}
```

* or in the _**`pom.xml`**_ file (via a community plugin)

```xml
	<dependencies>
		<dependency>
			<groupId>org.awesome</groupId>
			<artifactId>library</artifactId>
			<version>0.0.1-SNAPSHOT</version>
		</dependency>
	</dependencies>
```

* or in the **_`build.gradle`_**, **_`cargo.toml`_**, **_`pubspec.yaml`_**,... files (via a community plugin).

Notes:

https://nx.dev/concepts/more-concepts/how-project-graph-is-built

##--##

<!-- .slide: class="with-code consolas" -->

## Nx Project Graph

### Project dependencies

Nx (or a plugin)  uses various sources of information to create the graph of dependencies:

<br>

2. **Import statements** referencing a particular project in the workspace

<br>
<br>

Example in **Typescript**/**Javascript**:

<br>

```ts
import { something } from '@myorg/awesome-library';
```
<!-- .element: class="big-code" -->

<br>

Can be any **source file** (Java, Go, etc), provided you can statically analyze it

##--##

<!-- .slide: class="with-code consolas" -->

## Nx Project Graph

### Project dependencies

Nx (or a plugin)  uses various sources of information to create the graph of dependencies:

<br>

3. **Implicit dependencies** defined in the project configuration file.

<br>
<br>

In the **_`project.json`_**:

```json
{
  "root": "/libs/myapp",
  "implicitDependencies": ["some-api"]
}
```

or in the **_`package.json`_** file

```json
{
  "name": "myapp",
  "nx": {
    "implicitDependencies": ["some-api"]
  }
}
```

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Task Graph

### Definition

=  **Graph** representation of **dependencies** between **tasks** within a single project or  inter-projects.

![center](assets/images/school/task-graph-execution.svg)

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Task Graph

### Task dependencies

Nx reads the **project configuration** (**_`project.json`_**) file to create dependencies between tasks

```json [1|4-6]
  "targets": {
    "build": {
      "executor": "@nxrocks/nx-spring-boot:build",
      "dependsOn": [
        "^install"
      ]
    },
    "install": {
      "executor": "@nxrocks/nx-spring-boot:install",
      "dependsOn": [
        "test"
      ]
    }
  }
```
##--##

<!-- .slide: class="with-code consolas" -->

## Nx Project Graph

### Task dependencies

Nx reads the **workspace configuration** (**_`nx.json`_**) file to create dependencies between tasks

```json [1|4-6|10-12]
  "targetDefaults": {
    "build": {
      "executor": "@nxrocks/nx-spring-boot:build",
      "dependsOn": [
        "^install"
      ]
    },
    "install": {
      "executor": "@nxrocks/nx-spring-boot:install",
      "dependsOn": [
        "test"
      ]
    }
  }
```

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Project & Task Graph

### Graph Exploration

To explore the project graph, simply run: **_`nx graph`_**

```shell
$ npx nx graph [--affected]
```
<!-- .element: class="big-code" -->

or 

```shell
$ npx nx affected --graph
```
<!-- .element: class="big-code" -->

Let' s see it in action :

https://t.ly/vWcgr

![center](assets/images/school/qr-nx-sample-graph.png)

##==##

<!-- .slide: class="exercice" -->

# Nx Plugins, Generators & Executors in action (Advanced)

## Lab 03

<br>

1. Open **`sfeir-school-nx/labs/lab-03/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="transition left" -->

# Nx Main Commands

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx list`_**

Command that lists **installed plugins**, their **capabilities** and other available plugins.

```shell
$ npx nx list
```
<!-- .element: class="big-code" -->

<br>

To list capabilities (i.e **generators** and **executors**) of an **installed plugin** in the workspace:

<br>

```shell
$ npx nx list [plugin-package-name]
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->
# _`nx list`_ command

## Lab 04

<br>

1. Open **`sfeir-school-nx/labs/lab-04/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx generate`_**

Command that runs a **generator** that creates and/or modifies files based on a generator from a plugin.

```shell
$ npx nx generate <plugin-package-name>:<generator-name>
```
<!-- .element: class="big-code" -->

<br>

A shorter command (alias) is avaliable

<br>

```shell
$ npx nx g <plugin-package-name>:<generator-name>
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx run`_**

Command that **runs** a **target** defined for your project.

<br>

```shell
$ npx nx run <target> [options]
```
<!-- .element: class="big-code" -->

<br>

Target definitions can be found in:

* the **_`scripts`_** property of the project **_`package.json`_**, 

* or in the **_`targets`_** property of the project **_`project.json`_** file.

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx run-many`_**

Command that **runs** one or multiple **targets** for **multiple** listed projects

<br>

```shell
$ npx nx run-many <target(s)> [options]
```
<!-- .element: class="big-code" -->

<br>

Target definitions can be found in:

* the **_`scripts`_** property of the project **_`package.json`_**, 

* or in the **_`targets`_** property of the project **_`project.json`_** file.

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx run-many`_**

Command that **runs** one or multiple **targets** for **multiple** listed projects

<br>

```shell
$ npx nx run-many <target(s)> [options]
```
<!-- .element: class="big-code" -->

<br>

Some main options:

* **`--targets|--target=<string>`** : Task(s) to run for affected projects

* **`--projects=<string>`** : A pattern or comma-separated list of projects to **include**

* **_`--exclude=<string>`_** : A pattern or comma-separated list of projects to **exclude**

* **_`--parallel=<number|false>`_** : Max number of parallel processes (3 by default)

* **_`--skip-nx-cache`_** : Skips the Nx cache when running the task(s)


##==##

<!-- .slide: class="exercice" -->

# _`nx run-many`_ command

## Lab 05

<br>

1. Open **`sfeir-school-nx/labs/lab-05/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx affected`_**

Command that **runs** one or multiple **targets** for **affected** projects


```shell
$ npx nx affected <target(s)> [options]
```
<!-- .element: class="big-code" -->

<br>

Some main options:

* **`--base=<string>`** : Base of the current Git branch (usually **_`main`_** or **_`master`_**)

* **`--head=<string>`** : Latest commit of the current branch (usually **_`HEAD`_**)

* **`--targets|--target=<string>`** : Task(s) to run for affected projects

* **`--projects=<string>`** : A pattern or comma-separated list of projects to **include**

* **_`--exclude=<string>`_** : A pattern or comma-separated list of projects to **exclude**

* **_`--parallel=<number|false>`_** : Max number of parallel processes (3 by default)

* **_`--skip-nx-cache`_** : Skips the Nx cache when running the task(s)


##==##

<!-- .slide: class="exercice" -->

# _`nx affected`_ command

## Lab 06

<br>

1. Open **`sfeir-school-nx/labs/lab-06/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx graph`_**

Command that **outputs** the graph of dependencies either into a file or in the Browser


```shell
$ npx nx graph [options]
```
<!-- .element: class="big-code" -->

<br>

Some main options:

* **`--affected`** :  Highlight projects affected by current changes in the workspace

* **`--watch`** : Watch for changes to project graph and update in-browser

* **`--file`** : Output to a file (can be a **_`JSON`_** or **_`HTML`_** file)

* **`--base=<string>`** : Base of the current Git branch (usually **_`main`_** or **_`master`_**)

* **`--head=<string>`** : Latest commit of the current branch (usually **_`HEAD`_**)


##==##

<!-- .slide: class="exercice" -->

# _`nx graph`_ command

## Lab 07

<br>

1. Open **`sfeir-school-nx/labs/lab-07/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx migrate`_**

Command that **migrates** Nx itself or any package in the workspace to a **target version**.

<br>

```shell
$ npx nx migrate <package-name>@<version> [options]
```
<!-- .element: class="big-code" -->

<br>

Migration is done in 2 steps:

* Update of packages versions in **_`package.json`_** and creation of **_`migrations.json`_**
  * **_`migrations.json`_** contains all instructions to update code

* Actual Migration of the code, based on the **_`migrations.json`_** file (if any)
  * _`npx nx migrate --run-migrations [--if-exists]`_

##==##

<!-- .slide: class="with-code consolas" -->

## Nx Main Commands

### **_`nx migrate`_**

Command that **migrates** Nx itself or any package in the workspace to a **target version**.

✅ Nx automatically handles the migration of all packages it supports.

So,

```shell
$ npx nx migrate latest [options]   // 'latest' <=> '@nx/workspace@latest'
```
<!-- .element: class="big-code" -->

Will update **_`"nx"`_** package, but also all **_`"@nx/*"`_** packages present in the **_`package.json`_**

<br>

⚠️ To migrate any **third-party package**, you must **manually run**:

```shell
$ npx nx migrate <package-name>@<version> [options]
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="exercice" -->

# _`nx migrate`_ command

## Lab 08

<br>

1. Open **`sfeir-school-nx/labs/lab-08/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Nx Main Commands

### **_`nx [command] --help`_**

Whenever you need help on a main or sub command of Nx, use _**`nx [command] --help`**_

```shell
npx nx --help
Smart, Fast and Extensible Build System

Commands:
  nx affected                                      Run target for affected projects
  nx affected:graph                                Graph dependencies affected by changes
    [aliases: affected:dep-graph] [deprecated: Use `nx graph --affected`, or `nx affected --graph` instead depending on which best suits your use case. The `affected:graph` command will be removed in Nx 18.]
  nx connect                                       Connect workspace to Nx Cloud                                                                                                 [aliases: connect-to-nx-cloud]
  nx daemon                                        Prints information about the Nx Daemon process or starts a daemon process
  nx graph                                         Graph dependencies within workspace                                                                                                     [aliases: dep-graph]
  nx exec                                          Executes any command as if it was a target on the project
  nx format:check                                  Check for un-formatted files
  nx format:write                                  Overwrite un-formatted files                                                                                                               [aliases: format]
  nx generate <generator> [_..]                    Generate or update source code (e.g., nx generate @nx/js:lib mylib).                                                                            [aliases: g]
  nx init                                          Adds Nx to any type of workspace. It installs nx, creates an nx.json configuration file and optionally sets up distributed caching. For more info, check
                                                   https://nx.dev/recipes/adopting-nx.
  nx list [plugin]                                 Lists installed plugins, capabilities of installed plugins and other available plugins.
  nx migrate [packageAndVersion]                   Creates a migrations file or runs migrations from the migrations file.
                                                   - Migrate packages and create migrations.json (e.g., nx migrate @nx/workspace@latest)
                                                   - Run migrations (e.g., nx migrate --run-migrations=migrations.json). Use flag --if-exists to run migrations only if the migrations file exists.
  nx print-affected                                Prints information about the projects and targets affected by changes
   [deprecated: Use `nx show projects --affected`, `nx affected --graph -t build` or `nx graph --affected` depending on which best suits your use case. The `print-affected` command will be removed in Nx 18.]
  nx release                                       **ALPHA**: Orchestrate versioning and publishing of applications and libraries
  nx repair                                        Repair any configuration that is no longer supported by Nx.

                                                   Specifically, this will run every migration within the `nx` package
                                                   against the current repository. Doing so should fix any configuration
                                                   details left behind if the repository was previously updated to a new
                                                   Nx version without using `nx migrate`.

                                                   If your repository has only ever updated to newer versions of Nx with
                                                   `nx migrate`, running `nx repair` should do nothing.

  nx report                                        Reports useful version numbers to copy into the Nx issue template
  nx reset                                         Clears all the cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon.                                     [aliases: clear-cache]
  nx run [project][:target][:configuration] [_..]  Run a target for a project
                                                   (e.g., nx run myapp:serve:production).

                                                   You can also use the infix notation to run a target:
                                                   (e.g., nx serve myapp --configuration=production)

                                                   You can skip the use of Nx cache by using the --skip-nx-cache option.
  nx run-many                                      Run target for multiple listed projects
  nx show                                          Show information about the workspace (e.g., list of projects)
  nx view-logs                                     Enables you to view and interact with the logs via the advanced analytic UI from Nx Cloud to help you debug your issue. To do this, Nx needs to connect your
                                                   workspace to Nx Cloud and upload the most recent run details. Only the metrics are uploaded, not the artefacts.
  nx watch                                         Watch for changes within projects, and execute commands

Options:
  --help     Show help                                                                                                                                                                                [boolean]
  --version  Show version number                                                                                                                                                                      [boolean]

```

##==##

<!-- .slide: class="transition left" -->

# Nx Integration with Editors

##==##

## Nx Integration with Editors

### 👉🏾 Nx Console

**Nx Console** is the **UI** for Nx, available as an **extension** for `VSCode`, `IntelliJ*` <sup>*</sup> and `Neovim*` <sup>*</sup>.

<div class="flex-row">
<img class="w-300" src="./assets/images/school/vscode.png">
<img class="w-300" src="./assets/images/school/intellij.png">
<img class="w-300" src="./assets/images/school/neovim.svg">
</div

<br><br>

* <sup>*</sup> Only compatible with some versions of `IntelliJ IDEA`, like **Ultimate**, **PhpStorm**, **WebStorm**

* <sup>*</sup> The `Neovim` plugin is built and maintained by the community
<!-- .element: class="list-fragment" -->

##==##

![full-center h-1000](assets/images/school/nx-console-light.png)

Notes:

It works for any installed generators or any targets defined in your workspace.

Nx Console does not have a specific UI for, say, generating a component. 

Instead, Nx Console does what the command-line version of Nx does - it analyzes the same meta information to create the needed UI.

This means that anything you can do with Nx, you can do with Nx Console.

**Nx Console** is an extension for `VSCode`, `IntelliJ` and `VIM`. 

It provides code autocompletion, interactive generators, workspace visualizations, powerful refactorings and more. 

##==##

<!-- .slide: class="exercice" -->

# Playing with Nx Console

## Lab 09

<br>

0. Install **Nx Console** (← for **`VSCode`**, → for **`Intellij`**)

<div class="flex-row">
<img src="./assets/images/school/vscode-install-qrcode.png">
<img src="./assets/images/school/intellij-install-qrcode.png">
</div>

1. Open **`sfeir-school-nx/labs/lab-09/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="transition left" -->

# Continuous Integration with Nx

##==##

## Continuous Integration with Nx

### &nbsp;

Nx is the perfect companion to **boost** the performances of your **CI/CD** platform

It can for example:

* Test **only the code that might have been affected by a PR**

* **Improve the average CI time** with **remote caching**

* **Improve the worst case CI time** with **distributed task execution**

* Quickly **troubleshoot errors** that occur in CI

* Create a simple but powerful pipeline configuration that easily scales with your codebase

Notes:

**Continuous Integration** (CI) is a very important part of software development.

When implemented well, continuous integration (CI) allows a team of developers to efficiently make changes to a codebase with the confidence that they haven't broken existing functionality. When implemented poorly, CI slows down the team by adding obstacles to deploying code without actually providing any confidence that the code is correct.

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### **Nx Cloud**

**Nx Cloud** is a Nx service that provides **remote caching** and **distributed task execution**(DTE). 

It allows you to:

* **Run** any command cross **multiple machines**  

* **Share** the **computation cache** across **your team and CI**

<br>

It acts like an **orchestrator** that distibutes tasks across various machines (a.k.a **agents**)

Notes:

* **Run any command across multiple machines** while giving you a consolidated view of the command as if it ran locally. 

* **share the computation cache across your team and CI**, which can improve the performance of your builds.

##--##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### **Nx Cloud**

The service is **FREE for opensource** projects, and requires a **paid subscription** for other usages.

<br>

You can use Nx Cloud :

* with **zero-config** --> https://cloud.nx.app/
* or install your own **on-prem instance**

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### Setting up **Remote Caching** & **Distributed Task Execution** with **Nx Cloud**

To get started with **Nx Cloud**, run the following command:

```shell [1|3]
$ npx nx connect
? Enable distributed caching to make your CI faster … 
    Yes I want faster builds
    No
```
<!-- .element: class="big-code" -->

This will generate an **access token** , linked to your workspace, that you can later claim.

Notes:

Claiming your workspace allows you to:

* see stats about your CI runs, cache hits number of agents used for distributing tasks
* enable source control integrations to get information embedded in your GitHub, Bitbucket or GitLab PRs
* manage and create access tokens and adjust access and permission
* manage your organization & user permissions for your Nx Cloud workspace

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### Setting up your **CI Workflow**

Nx supports many popular CI plaforms to run your jobs:

![](assets/images/school/ci-platforms.png)

Those are the actual **machines** or **agents** that will run your tasks

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### Setting up your **CI Workflow**

Nx can help generate the initial configuration to get you started

```shell [1|5|6-10]
$ npx nx generate @nx/workspace:ci-workflow

>  NX  Generating @nx/workspace:ci-workflow

? What is your target CI provider? … 
    github
    circleci
    azure
    bitbucket-pipelines
    gitlab
```
<!-- .element: class="big-code" -->

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### &nbsp;

![center](assets/images/school/distributed-caching-and-task-execution.svg)

##==##

<!-- .slide: class="exercice" -->

# Setting up Nx Cloud and CI Workflow

## Lab 10

<br>

1. Open **`sfeir-school-nx/labs/lab-10/README.md`**
2. Follow the instructions

##==##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### **Nx Agents** (early preview)

📢 Heads Up!  Nx is working on its own **CI** platform, called **Nx Agents**!

![center](assets/images/school/distributed-task-execution-on-workflows.svg)

##--##

<!-- .slide: class="with-code consolas max-height" -->

## Continuous Integration with Nx

### **Nx Agents** (early preview)

This will bring many advantages:

* **Managed Agents**, seamleass configuration

* **Intelligent Dynamic Scaling**, based on PR size

* **Automatic Task Splitting**, for example splitting a large E2E test file

* **Flaky Task Re-Running**,  enhancing reliability

<br>
<br>

⚠️ This feature is still in **work-in-progress**, with a public launch anticipated in **Feb 2024**.

Notes:

https://nx.dev/ci/features/nx-agents