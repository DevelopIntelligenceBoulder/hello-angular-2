(function() {
'use strict';

/**
 * Angular 2.0 Component to create Hello World.
 * Plain JavaScript with no Typescript.
 * Attaching application component to the DI.App namespace.
 **/
DI.App.HelloApp =
	//Angular namespace
    ng.core
        //Component configuration method
        .Component({
            selector: 'di-hello',
            template: '<h1>Hello {{place}}</h1>'
        })
        //Component implementation
        //  Containing a component definition object
        .Class({
            //Property assignment on instantiation
            constructor: function() {
                this.place = 'World'
            }
        });

})();