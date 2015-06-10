# hello-angular-2
A simple example of Hello World in Angular 2.x syntax. 

This example isn't taking advantage of [Microsoft's Typescript](http://www.typescriptlang.org/) which is the language of choice when writing Angular 2.x applications. 

There are a couple of options to utilize Angular 2.x without Typescript. 

1. Use the CDN for the Angular 2.0 framework: `http://code.angularjs.org/xxxx/angular2.sfx.dev.js`
    * Simply replace `xxxx` with the latest version (i.e. 2.0.0-alpha.25)
2. Download the Angular 2.0 framework
    * Go to [AngularJS](https://angularjs.org/)
    * Click `Download`
    * Click `Previous Versions`
    * Go to the 2.0.0-alpha repos at the bottom of the list
    * Click the latest repo [2.0.0-alpha.25/](https://code.angularjs.org/2.0.0-alpha.25/)
    * Download the angular2.sfx.dev.js version  

## What is this?
This example shows how to take a model property defined in a Component and populate it within an Angular view.

### Within the main.js
The application namespace is created. It is a simple JavaScript namespace that the Angular 2.0 component will be attached too.

### Within the hello.js
A model property `place` has been added to the component instance via `this`. Why? Components in Angular 2.0 are simply objects created via constructors. 

A component annotation is attached to the JavaScript object, marking it as an Angular component and specifying its custom tag selector. 

A view annotation is attached to the JavaScript object, defining the template. 

### Within the bootstrap.js
An event listener is created to manually bootstrap the Angular component when the DOM is ready for use.

### Within the index.html
An Angular component is placed within the DOM.

## Instructions
1. Install NodeJS
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e.  Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser