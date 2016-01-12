# hello-angular-2
A simple example of Hello World in [Angular 2.x](https://angular.io/) syntax. Built upon Angular 2 beta.

This example isn't taking advantage of [Microsoft's Typescript](http://www.typescriptlang.org/) which is the language of choice when writing Angular 2.x applications. 

There are a couple of options to utilize Angular 2.x without Typescript. 

1. Download the framework and dependencies from [code.angularjs.org](https://code.angularjs.org/)
    * Go into the latest Angular 2 version
    * Download the Rx.umd.js
    * Download the angular2-polyfills.js
    * Download the angular2-all.umd.dev.js

## What is this?
This example shows how to create an Angular Component. It takes a model property defined in a Controller Class and populate it within an Component Template.

### Within the main.js
The application namespace is created. It is a simple JavaScript namespace that the Angular 2.0 component will be attached too.

### Within the hello.js
A model property `place` has been added to the component instance via `this`. Why? Components in Angular 2.0 are simply objects created via constructors. 

A component has a defined selector and template. The selector is used in the HTML document as the custom tag. The template will be rendered in the DOM with rendered model data. 

A component has a class connected with it. This can be thought of as the controller holding the model data. 

### Within the bootstrap.js
An event listener is created to manually bootstrap the Angular component when the DOM is ready for use. Angular doesn't automatically bootstrap its components.

### Within the index.html
An Angular component is placed within the DOM. Usually there will be one top-level component that is bootstrapped.

## Instructions
1. Install [NodeJS](https://nodejs.org/)
2. Run `npm start` to get the application running on the web server
    * Packages needed for this application will be installed (i.e.  Express)
    * The Node/Express Web Server will start
3. Go to `http://localhost:8080/src/` in your web browser
4. You can try this out in this [Plunker](http://plnkr.co/edit/8u0foD?p=preview)

##Where to go from here?
[DevelopIntelligence](http://www.developintelligence.com/) offers a variety of [classes on Angular](http://www.developintelligence.com/catalog/web-development-training/angularjs). Check out [Advanced AngularJS](http://www.developintelligence.com/catalog/web-development-training/angularjs/advanced-angularjs-development) or the [AngularJS Boot Camp](http://www.developintelligence.com/catalog/web-development-training/angularjs/angularjs-boot-camp) to get your team up to speed.
