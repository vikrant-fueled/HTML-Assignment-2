require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    var Site = {
        init : function() {
            this.tabs();
        },

        tabs : function() {
            var tabs = $('#secondary > .tabs'),
            uls = tabs.find('> ul'),
            tabHeadings = tabs.prev('#tabHeadings');

            //hide all headings (h4s)
            tabs.find('h4').remove();

            //hide all uls except first;
            uls.not(':first').hide();

            //listen for heading click events
            tabHeadings.delegate('li', 'click', function(e) {
                    var li = $(this), hash;
                    //prevent default click action
                    e.preventDefault();

                    //change class to selected
                    li
                        .siblings()
                            .removeClass('selected')
                        .end()
                        .addClass('selected');

                    //grab the hash of the anchor
                    hash = li.children('a').attr('href');

                    //show the corressponding section
                    uls
                        .hide()
                        .filter(hash)
                            .fadeIn(500);
            });


            console.log('Tabs done.');
        }
    }



    console.log(app);
    console.log('Running jQuery %s', $().jquery);


    Site.init();
});
