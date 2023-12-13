# Lab 07: _`nx graph`_ command

We will be working on this workspace:

![Alt text](../lab-common/lab-nx-multi-stacks-monorepo.png)

## Lab Setup

1. Clone the repo with: `git clone https://github.com/tinesoft/nx-multi-stacks-monorepo.git`
2. Open the folder in VSCode or IDE of choice
3. Run `npm ci` to install  necessary **NPM** dependencies

## Launching the graph explorer

1. Open a Terminal
2. Run "`npx nx graph` and navigates to http://127.0.0.1:4211/projects

## Exploring the projects in the workspace

### Inspecting project dependencies

1. On Left Panel, click on **Show all projects**
2. Answer the following questions:
    * What kind of **direct dependency** exists between `reactapp` and `reactapp-e2e` : ? _(💡**Implicit** or **Explicit**)_
    * What kind of **direct dependency** exists between `ngapp` and `reactapp`: ? _(💡**Implicit** or **Explicit**)_
    * What kind of **direct dependency** exists between `ngapp` and `bootapp`: ? _(💡**Implicit** or **Explicit**)_
    * Why is there a **direct dependency** between `ngapp` and `nglib`: ? _(💡 Click on the arrow ⤵ and Observe the files listed)_
        * Open the reported files and inspect them to find the dependency
    * Why is there a **direct dependency** between `reactlib` and `commonlib`: ? _(💡 Click on the arrow ⤵ and Observe the files listed)_
        * Open the reported files and inspect them to find the dependency
    * Why is there a **direct dependency** between `boot-parent` and `bootlib`: ? _(💡 Click on the arrow ⤵ and Observe the files listed)_
        * Open the reported files and inspect them to find the dependency

### Playing with the UI

1. On Left Panel, make sure **Show all projects** is still selected
2. Click on the `ngapp` node and then on **"Focus"**
    * What do you notice ?
3. On Left Panel, Click on 👁️ icon, next to the `boot-parent` in the **app projects** section
    * What do you notice ?
4. Click on `ngapp-e2e` in **app projects** section
    * What do you notice ?

## Exploring the tasks linked to projects in the workspace

### Inspecting tasks dependencies

1. On Left Panel (top corner), switch from **Projects** -> **Tasks**
2. Click on **boot-parent** item in the **app projects** section
3. Answer the following questions:
    * What task(s) does the `build` task of `boot-parent` project depend on ? _(💡 Name the dependent **project(s)** and the related **task(s)**)_
4. Click on  **Hide all tasks** to hide everything in the main view
5. Select `Serve` in the **Target Name** dropdown
6. Click on **bootapp** item in the **app projects** section to select it
7. Click on **ngapp** item in the **app projects** section to select it
8. Answer the following questions:
    * What task(s) does the `serve` task of `bootapp` project depend on ? _(💡 Name the dependent **project(s)** and the related **task(s)**)_
    * What task(s) does the `serve` task of `ngapp` project depend on ? _(💡 Name the dependent **project(s)** and the related **task(s)**)_

### Playing with the UI

1. On Left Panel (top corner), make sure from **Tasks** is stll selected
2. Click on **Show all tasks** is still selected
3. Select `build` in the **Target Name** dropdown
4. Click on the `reactapp:build:production` node
8. Answer the following questions:
    * What **executor** is responsible for running that task ? _(💡 Its name starts with **@nx/w...**)_
    * What are its inputs ? _(💡 Click on the **INPUTS** dropdown in the popup and Observe the files listed)_
