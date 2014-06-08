;(function($) {

    $.fn.ssdVerticalNavigation = function(options) {

        "use strict";

        var settings = $.extend({

            classMaster : 'master',
            classActive : 'active',
            replaceWithAnchorText : true,
            replaceElement : 'h1'

        }, options);



        function _isEmpty(thisValue) {

            "use strict";

            if ($.isArray(thisValue)) {

                return (thisValue.length <= 0);

            } else {

                return (
                    thisValue === '' ||
                    thisValue === null ||
                    typeof thisValue === 'undefined'
                );

            }

        }


        function _shouldReplaceHeading(thisHeading) {

            "use strict";

            return (
                settings.replaceWithAnchorText &&
                !_isEmpty(thisHeading)
            );

        }


        function _replaceHeading(thisHeading) {

            "use strict";

            if (_shouldReplaceHeading(thisHeading)) {

                $(settings.replaceElement).html(thisHeading.trim());

            }

        }


        function _leftNavigationActiveMain(thisLi) {

            "use strict";

            thisLi
                .toggleClass(settings.classActive)
                .siblings()
                .removeClass(settings.classActive);

        }


        function _leftNavigationActiveSub(thisLi) {

            "use strict";

            thisLi
                .addClass(settings.classActive)
                .siblings()
                .removeClass(settings.classActive)
                .parent('ul')
                .parent('li')
                .siblings()
                .find('li')
                .removeClass(settings.classActive);

            _replaceHeading(thisLi.text());

        }


        function _leftNavigationClick(thisParentUl, thisLi) {

            "use strict";

            if (thisParentUl.hasClass(settings.classMaster)) {

                _leftNavigationActiveMain(thisLi);

            } else {

                _leftNavigationActiveSub(thisLi);

            }

        }


        return this.each(function() {

            "use strict";

            $(this)
                .addClass(settings.classMaster)
                .on('click',  'li a', function(event) {

                try {

                    event.preventDefault();
                    event.stopPropagation();

                    var thisA = $(this),
                        thisLi = thisA.parent('li'),
                        thisParentUl = thisLi.parent('ul');

                    _leftNavigationClick(thisParentUl, thisLi);

                } catch (errorMessage) {

                    console.log(errorMessage);

                }

            });

        });


    }

}(jQuery));