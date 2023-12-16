# Lab 03: Playing with Nx Plugins, Generators & Executors (Advanced)

In this lab, we will recreate this more advanced Nx workspace:

![Alt text](../lab-common/lab-nx-multi-stacks-monorepo.png)

It contains a Nx **integrated** monorepo, with support for **multiple stacks**:

- Angular - using the official plugin `@nx/angular`
- React - using the official plugin `@nx/react`
- Spring Boot - using the community plugin [`@nxrocks/nx-spring-boot`](https://github.com/tinesoft/nxrocks/blob/develop/packages/nx-spring-boot)

## Lab Setup

How to recreate this exact workspace?

### General Instructions

1. Create the workspace: `npx --yes create-nx-workspace@17.0.0 nx-multi-stacks-monorepo --preset=apps --workspaceType=integrated --nxCloud=false`

2. Move into the created repo: `cd nx-multi-stacks-monorepo` and open it inside you IDE of choice

3. Add `@nx/angular@17.0.0 @nx/react@17.0.0 @nxrocks/nx-spring-boot@latest` plugins as a dev dependencies: `npm install -D @nx/angular@17.0.0 @nx/react@17.0.0 @nxrocks/nx-spring-boot@latest`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore: add angular, react and spring-boot plugins'
    > ```

    </details>

### Angular Stack Instructions

1. Generate the **angular application**: `npx nx generate @nx/angular:application --name=ngapp --directory=frontend/apps/ngapp --routing=true --standalone=true --projectNameAndRootFormat=as-provided --style=scss --prefix=ngapp --port=1200 --backendProject=api --tags="type:app, type:angular, type:frontend" --no-interactive`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(ngapp): generate a basic angular application'
    > ```

    </details>

2. Generate the **angular library**: `npx nx g @nx/angular:library --name=nglib --buildable=true --directory=frontend/libs/nglib --changeDetection=OnPush --prefix=nglib --projectNameAndRootFormat=as-provided --style=scss --tags="type:lib, type:angular, type:frontend" --skipModule=true --no-interactive`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(nglib): generate a basic angular library'
    > ```

    </details>

3. Generate a `Welcome` Component inside the `nglib` above: `npx nx g @nx/angular:component --name=welcome --directory=frontend/libs/nglib/src/components --export=true --standalone=true --changeDetection=OnPush --nameAndDirectoryFormat=as-provided --prefix=nglib`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(nglib): generate a basic `Welcome` component inside `nglib`'
    > ```

    </details>

4. Update the generated `Welcome` component above and use it in `ngapp` as such:
    * `frontend/libs/nglib/src/components/welcome.component.html` :

    ```diff
    -<p>welcome works!</p>
    +<div class="welcome">
    +    <p>Welcome again, from <strong>nglib!</strong></p>
    +    <p>Today is: <strong>{{ today | date}}</strong></p>
    +</div>
    ```

    * `frontend/libs/nglib/src/components/welcome.component.scss` :

    ```diff
    +.welcome {
    +    border-radius: 4px;
    +    border: 2px solid red;
    +    padding: 1rem;
    +    margin-top: 0.5rem;
    +    margin-bottom: 0.5rem;
    +}
    ```

    * `frontend/libs/nglib/src/components/welcome.component.ts` :

    ```diff
    -export class WelcomeComponent {}
    +export class WelcomeComponent {
    +  today = new Date();
    +}
    ```

    * `frontend/apps/ngapp/src/app/nx-welcome.component.ts` :

    ```diff
    import { Component, ViewEncapsulation } from '@angular/core';
    import { CommonModule } from '@angular/common';
    +import { WelcomeComponent } from '@nx-multi-stacks-monorepo/nglib';
    
    @Component({
    selector: 'ngapp-nx-welcome',
    standalone: true,
    -  imports: [CommonModule],
    +  imports: [CommonModule, WelcomeComponent],
    template: `
        <!--
          * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    import { CommonModule } from '@angular/common';
                <span> Hello there, </span>
                Welcome ngapp 👋
            </h1>
    +       <nglib-welcome></nglib-welcome>
            </div>
            <!--  HERO  -->
            <div id="hero" class="rounded">
    ```

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(ngapp): update `Welcome` component from `nglib` and use it in `ngapp`'
    > ```

    </details>

### React Stack Instructions

1. Generate the **react application**: `npx nx g @nx/react:application --name=reactapp --directory=frontend/apps/reactapp --projectNameAndRootFormat=as-provided --routing=true --style=scss --tags="type:app, type:react, type:frontend" --no-interactive`
    * Open `frontend/apps/reactapp/project.json` and change default port use to serve the app to `2200` (to avoid conflict with other apps):

    ```diff
    "serve": {
        "executor": "@nx/webpack:dev-server",
        "defaultConfiguration": "development",
        "options": {
            "buildTarget": "reactapp:build",
    -        "hmr": true
    +        "hmr": true,
    +        "port": 2200
        },
    ```

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(reactapp): generate a basic react application'
    > ```

    </details>

2. Generate the **react library**: `npx nx generate @nx/react:library --name=reactlib --unitTestRunner=jest --directory=frontend/libs/reactlib --component=false --projectNameAndRootFormat=as-provided --style=scss --tags="type:lib, type:react, type:frontend" --no-interactive`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(reactlib): generate a basic react library'
    > ```

    </details>

3. Generate a `Welcome` Component inside the `reactlib` above: `npx nx g @nx/react:component --name=welcome --directory=frontend/libs/reactlib/src/components --export=true --standalone=true --changeDetection=OnPush --nameAndDirectoryFormat=as-provided --prefix=reactlib`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(reactlib): generate a basic `Welcome` component inside `reactlib`'
    > ```

    </details>

4. Update the generated `Welcome` component above and use it in `reactapp` as such:
    * `frontend/libs/reactlib/src/components/welcome.tsx` :

    ```diff
    export interface WelcomeProps {}
    
    export function Welcome(props: WelcomeProps) {
    +  const today = new Date().toDateString();
    return (
    -    <div className={styles['container']}>
    -      <h1>Welcome to Welcome!</h1>
    +    <div className={styles['welcome']}>
    +      <h1>Welcome again, from <strong>reactlib!</strong></h1>
    +      <p>Today is: <strong>{today}</strong></p>
        </div>
    );
    }
    ```

    * `frontend/libs/reactlib/src/components/welcome.module.scss` :

    ```diff
    -/*
    - * Replace this with your own classes
    - *
    - * e.g.
    - * .container {
    - * }
    -*/
    +.welcome {
    +    border-radius: 4px;
    +    border: 2px solid red;
    +    padding: 1rem;
    +    margin-top: 0.5rem;
    +    margin-bottom: 0.5rem;
    +}
    ```

    * `frontend/apps/reactapp/src/app/nx-welcome.tsx` :

    ```diff
    -/*
    - * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    - This is a starter component and can be deleted.
    - * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    - Delete this file and get started with your project!
    - * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    - */
    +import { Welcome } from "@nx-multi-stacks-monorepo/reactlib";
    +
    export function NxWelcome({ title }: { title: string }) {
    return (
        <>
    export function NxWelcome({ title }: { title: string }) {
                Welcome {title} 👋
                </h1>
            </div>
    -
    +       <Welcome/>
            <div id="hero" className="rounded">
                <div className="text-container">
                <h2>
    ```

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(reactapp): update `Welcome` component from `reaclib` and use it in `reactapp`'
    > ```

    </details>

### Common JS/TS Stack Instructions

1. Generate the **common js/ts library**: `npx nx generate @nx/js:library --name=commonlib --unitTestRunner=jest --directory=frontend/libs/commonlib --projectNameAndRootFormat=as-provided --tags="type:lib, type:js, type:frontend" --no-interactive`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(commonlib): generate a basic JS/TS library'
    > ```

    </details>

2. Update the generated `commonlib` file above  (by adding a `getTodayDate()` util) and use it in `nglib` and `reactlib` as such:
    * `frontend/libs/commonlib/src/lib/commonlib.ts` :

    ```diff
    export function commonlib(): string {
    return 'commonlib';
    }
    +
    +export function getTodayDate(){
    +  return new Date();
    +}
    ```

    * `frontend/libs/nglib/src/components/welcome.component.ts` :

    ```diff
    import { ChangeDetectionStrategy, Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    +import { getTodayDate } from '@nx-multi-stacks-monorepo/commonlib';
    
    @Component({
    selector: 'nglib-welcome',
    import { CommonModule } from '@angular/common';
    changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class WelcomeComponent {
    -  today = new Date();
    +  today = getTodayDate();
    }
    ```

    * `frontend/libs/reactlib/src/components/welcome.tsx`:

    ```diff
    +import { getTodayDate } from '@nx-multi-stacks-monorepo/commonlib';
    import styles from './welcome.module.scss';
    
    /* eslint-disable-next-line */
    export interface WelcomeProps {}
    
    export function Welcome(props: WelcomeProps) {
    -  const today = new Date().toDateString();
    +  const today = getTodayDate().toDateString();
    return (
        <div className={styles['welcome']}>
        <h1>Welcome again, from <strong>reactlib!</strong></h1>
    ```

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(frontend): update `nglib` and `reactlib` to use utils from `commonlib`'
    > ```

    </details>

### Spring Boot Stack Instructions

1. Generate the **Spring Boot application** inside a parent module `boot-parent`: `npx nx g @nxrocks/nx-spring-boot:project --name=bootapp --dependencies="web,jpa,h2,actuator,devtools" --artifactId=bootapp --directory=backend/bootapp --packageName=com.example.bootapp --keepProjectLevelWrapper=false --parentModuleName=boot-parent --transformIntoMultiModule=true --tags="type:api, type:java, type:backend" --projectNameAndRootFormat=as-provided --no-interactive`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(bootapp): generate a spring boot application inside a parent module'
    > ```

    </details>

2. Create a `WelcomeController.java` file in `backend/boot-parent/bootapp/src/main/java/com/example/bootapp/controller/` with content:

    ```java
    package com.example.bootapp.controller;

    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestParam;
    import org.springframework.web.bind.annotation.RestController;

    @RestController("/api")
    public class WelcomeController {
    
        private static final String WELCOME_TEMPLATE = "Welcome, %s, from '%s'!";
        public static record WelcomeMessage(String user, String message) { }

        @GetMapping("/welcome")
        public WelcomeMessage welcome(@RequestParam(value = "user", defaultValue = "Sfeir School Nx Attendee") String user) {
            return new WelcomeMessage(user, String.format(WELCOME_TEMPLATE, user, "bootapp"));
        }
    }
    ```

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(bootapp): add a `Welcome` REST controller inside `bootapp`'
    > ```

    </details>

3. Generate the **Spring Boot library** inside the `boot-parent` module: `npx nx generate @nxrocks/nx-spring-boot:project --name=bootlib --projectType=library --artifactId=bootlib --directory=backend/bootlib --packageName=com.example.bootlib --addToExistingParentModule=true --keepProjectLevelWrapper=false --parentModuleName=boot-parent --tags="type:api, type:java, type:backend" --projectNameAndRootFormat=as-provided --no-interactive`

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(bootlib): generate a spring boot library inside a parent module'
    > ```

    </details>


4. Update the generated `bootapp` application to use the `bootlib` :
    * Open `backend/boot-parent/bootapp/pom.xml` and update it as such (to use the `bootlib` library from above):

    ```diff
		</dependency>
	+	<dependency>
	+		<groupId>com.example</groupId>
	+		<artifactId>bootlib</artifactId>
	+		<version>${project.version}</version>
	+	</dependency>
	+</dependencies>
    ```

    * Open `backend/boot-parent/bootapp/src/main/java/com/example/bootapp/controller/WelcomeController.java` and update it as such (to use the `MyService` from the `bootlib`) :

    ```diff
    package com.example.bootapp.controller;

    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.RequestParam;
    import org.springframework.web.bind.annotation.RestController;
    +import com.example.bootlib.service.MyService;

    @RestController("/api")
    public class WelcomeController {

        private static final String WELCOME_TEMPLATE = "Welcome, %s, from '%s'!";
        public static record WelcomeMessage(String user, String message) { }

    +   private final MyService myService;

    +   public WelcomeController(MyService myService) {
    +       this.myService = myService;
    +   }

        @GetMapping("/welcome")
        public WelcomeMessage welcome(@RequestParam(value = "user", defaultValue = "Sfeir School Nx Attendee") String user) {
    -        return new WelcomeMessage(user, String.format(WELCOME_TEMPLATE, user, "bootapp"));
    +        return new WelcomeMessage(user, String.format(WELCOME_TEMPLATE, user, this.myService.message()));
        }
    }
    ```

    * Open `backend/boot-parent/bootapp/src/main/resources/application.properties` and update it as such (to define the property from the `bootlib` library from above):

    ```diff
    +bootlib.service.message = bootlib
    ```

    * Open `backend/boot-parent/bootapp/src/main/java/com/example/bootapp/BootappApplication.java` and update it as such (to include beans from `com.example` package, common to both `bootapp` and `bootlib`):

    ```diff
    -@SpringBootApplication
    +@SpringBootApplication(scanBasePackages = "com.example")
    public class BootappApplication {
    ```

    <details>
    <summary><b>💾 Save the current state!</b></summary>

    > ```shell
    > $ git add --all
    > $ git commit -m 'chore(bootapp): update the `bootapp` to use the `bootlib`'
    > ```

    </details>

### Link Angular and Spring Boot Stacks

1. Add an **implicit** link between the backend **Spring Boot application** (`bootapp`) and the frontend **Angular application** (`ngapp`) that uses its API: `npx nx g @nxrocks/nx-spring-boot:link --sourceProjectName=bootapp --targetProjectName=ngapp --no-interactive`
