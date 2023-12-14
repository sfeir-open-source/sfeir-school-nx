# Lab 04: _`nx list`_ command

We will be working on this workspace:

![Alt text](../lab-common/lab-nx-multi-stacks-monorepo.png)

## Lab Setup

1. Clone the repo with: `git clone https://github.com/tinesoft/nx-multi-stacks-monorepo.git`
2. Open the folder in VSCode or IDE of choice
3. Run `npm ci` to install  necessary **NPM** dependencies

## Listing plugins currently installed in the workspace

1. Open a Terminal
2. Run "`npx nx list`"
    * How many plugins are currently installed in the workspace?
    * What are they?

## Listing capabilities of the `nx` plugin

1. Open a Terminal within this repository
2. Run "`npx nx list nx`"
    * How many **generators** are available in the `"nx"` plugin?
    * How many **executors** are available in the `"nx"` plugin?
    * What generator can you use to **_run any command_** with Nx?

## Listing capabilities of the `@nx/angular` plugin

1. Open a Terminal within this repository
2. Run "`npx nx list @nx/angular`"
    * What can you  **generate** with the plugin?
    * What tasks can you **execute** with the plugin?
    * What generator can you use to **_run any command_** with Nx?
