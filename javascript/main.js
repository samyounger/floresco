
$(document).ready(function() {
//this scrolls into view the equities section of the portfolio view
    var equities = document.getElementById("equities-section");
    var bonds = document.getElementById("bonds-section");
    var funds = document.getElementById("funds-section");
        $('.nav-portfolio .nav-equities').on('click', function(event) {
                equities.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-portfolio .nav-bonds').on('click', function(event) {
                bonds.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-portfolio .nav-funds').on('click', function(event) {
                funds.scrollIntoView({behavior: "smooth" });
        });
});

function showValue(newValue) {
        document.getElementById("range").innerHTML=newValue;
    };

$(document).ready(function() {

    //for the two pie charts asset & currency allocations
    $('table.performance').highchartTable();
    $('table.asset-allocation').highchartTable();
    $('table.currency-allocation').highchartTable();

    //small-charts at the top of the page
    $.plot($(".chart-placeholder"), dataset, options);

// *******************************************************
//this filters which section to view by clicking
    //when i click on the profile element
    $('.primary-nav .nav-profile').on('click', function(event) {
        event.preventDefault();
        //if I click profile, it changes display on all other elements to 'none', and reveals just the profile div
        if ($('site-wrap .profile').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');

            //make just the profile element visible
        } else {
            $('site-wrap .profile').addClass('view')
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-profile').addClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-blog').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .blog').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .blog').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-blog').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-portfolio').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .portfolio').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .portfolio').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-portfolio').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-economics').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .economics').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .economics').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-economics').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-trading').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .trading').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .trading').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .following').removeClass('view');

            $('.primary-nav .nav-trading').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-following').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });
    $('.primary-nav .nav-following').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .following').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .following').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-following').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-blog').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });
});

//data for the two pie-charts
var data = [
    [1, 130],
    [2, 40],
    [3, 80],
    [4, 160],
    [5, 159],
    [6, 370],
    [7, 330],
    [8, 350],
    [9, 370],
    [10, 400],
    [11, 330],
    [12, 350]
];

var dataset = [{
    data: data
}];

var options = {
    series: {
        lines: {
            show: true
        },
        points: {
            radius: 1,
            show: false
        }
    }
};
