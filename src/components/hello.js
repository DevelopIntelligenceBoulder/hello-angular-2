(function() { 
	'use strict';

	/**
	 * Angular 2.0 Component to create Hello World.
	 **/
	DI.App.HelloApp =
		ng.core
			.Component({
				selector: 'di-hello',
				template: '<h1>Hello {{place}}</h1>'
			})
			.Class({
				constructor: function() {
					this.place = 'World'
				}
			});

})();