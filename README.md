# Angular TODO list

Project intended for testing with Angular. This includes basic and advanced concepts of Angular, such as lazy load, Observables, and services.

## prerequisites

Nodejs: 12.x;

Angular: 10.x;

## Installation and running locally

To install project dependencies, run the following command:

`npm install`

After that, just run the command `npx ng serve` to compile and run the server. The project will run at [http://localhost:4200](http://localhost:4200).

## Project structure

The project folder structure, in general, follows the standard already established by Angular. However, an addition was made to this structure in order to make the project more organized. Inside the `modules` folder we have subfolders that refer to Angular modules. The `pages` folder has subfolders related to modules responsible for each route of the application. The `services` contains the services and `models` contains the application domain models and auxilar models used inside components.

## Generating artifacts

To generate project artifacts in development mode, run the `npx ng build` command. The execution result will be in the `dist` folder in the project root. This can be served by the web server of your choice.

To compile the project in production mode, simply add the `--prod` parameter to the `npx ng build` command.

## Improvement points
- Perform unit tests
