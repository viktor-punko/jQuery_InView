// http://anton.shevchuk.name/javascript/jquery-for-beginners-filter-extend/
(function($, window, undefined){
    $.extend($.expr[':'], {
        /**
         * Get internal elements
         *
         * @param element DOM Element
         * @param i Integer Index
         * @param match Object All matched data
         * @param elements Array of Dom Elements
         */
        inView: function(element) {
            var visibleElemtnts = [];

            var elements = $(element).find('*');
            for (var i = 0; i < elements.length; i++) {
            	// http://stackoverflow.com/questions/20791374/jquery-check-if-element-is-visible-in-viewport
            	if ($(elements[i]).visible(true)) {
            		visibleElemtnts.push(elements[i]);
				}
            }

            return visibleElemtnts;
        }
    })
})(jQuery, window);