# Lab 03: _`nx run-many`_ command

0. Go to`workspace/` folder in VSCode or IDE of choice

## Running `build` task on all projects`

1. Open a Terminal
2. Run "`npx nx run-many --target build`"
3. Run again "`npx nx run-many --target build`" executor to see **computation caching** in action 
4. Run "`npx nx run-many --target build --skip-nx-cache`" 
  * what do you notice?
5. Run again "`npx nx run-many --target build --parallel 4`" executor to see **parallelization in action** in action 


## Running `build` task on  specific projects`

1. Open a Terminal within this repository
2. Run "`npx nx run-many --target build --projects="nx-*"`"
3. Run "`npx nx run-many --target build --exclude="nx-melos"`"

