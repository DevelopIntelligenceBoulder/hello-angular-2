(function() {
'use strict';

//Bootstrap Angular component when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
	ng.platform.browser.bootstrap(DI.App.HelloApp);
});

})();