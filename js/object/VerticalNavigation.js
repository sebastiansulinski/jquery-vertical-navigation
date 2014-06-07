var SSDSystem = SSDSystem || {};

SSDSystem.VerticalNavigation = function() {};

SSDSystem.VerticalNavigation.prototype = {

    navigationIdentity : '#leftNavigation',

    isEmpty : function(thisValue) {

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

    },

    replaceHeading : function(thisHeading) {

        "use strict";

        if (!this.isEmpty(thisHeading)) {

            $('h1#heading').html(thisHeading.trim());

        }

    },

    leftNavigationActiveMain : function(thisLi) {

        "use strict";

        thisLi
            .toggleClass('active')
            .siblings()
            .removeClass('active');

    },

    leftNavigationActiveSub : function(thisLi) {

        "use strict";

        thisLi
            .addClass('active')
            .siblings()
            .removeClass('active')
            .closest('ul')
            .closest('li')
            .siblings()
            .find('li')
            .removeClass('active');

        this.replaceHeading(thisLi.text());

    },

    leftNavigationClick : function(thisParentUl, thisLi) {

        "use strict";

        if (thisParentUl.is(this.navigationIdentity)) {

            this.leftNavigationActiveMain(thisLi);

        } else {

            this.leftNavigationActiveSub(thisLi);

        }

    },

    leftNavigation : function() {

        "use strict";

        var self = this;

        $(document).on('click', self.navigationIdentity + ' li a', function(event) {

            try {

                event.preventDefault();
                event.stopPropagation();

                var thisA = $(this),
                    thisLi = thisA.closest('li'),
                    thisParentUl = thisLi.closest('ul');

                self.leftNavigationClick(thisParentUl, thisLi);

            } catch (errorMessage) {

                console.log(errorMessage);

            }

        });

    },

    init : function(thisIdentity) {

        "use strict";

        try {

            if (!this.isEmpty(thisIdentity)) {

                this.navigationIdentity = thisIdentity;

            }

            this.leftNavigation();

        } catch (errorMessage) {

            console.log(errorMessage);

        }

    }

};