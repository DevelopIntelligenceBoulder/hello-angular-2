(function() { 
	'use strict';

	/**
	 * Angular 2.0 Component to create Hello World.
	 *	- Plain JavaScript Object Constructor
	 **/
	DI.App.Hello = function Hello() {
		this.place = 'World';
	};

	//Annotate the constructor with Angular
	DI.App.Hello.annotations = [
		new angular.ComponentAnnotation({
			selector: 'di-hello'
		}),
		new angular.ViewAnnotation({
			template: '<h1>Hello {{place}}</h1>'
		})
	];

})();