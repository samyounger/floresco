
$(document).ready(function() {
//this scrolls into view the portfolio analytics sections of the portfolio view
    var overview = document.getElementById("overview-section");
    var fixedinterest = document.getElementById("fixedinterest-section");
    var equities = document.getElementById("equities-section");
    var property = document.getElementById("property-section");
    var alternatives = document.getElementById("alternatives-section");
    var liquidassets = document.getElementById("liquidassets-section");
    var performancerisk = document.getElementById("performancerisk-section");

        $('.nav-overview').on('click', function(event) {
                overview.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-fixedinterest').on('click', function(event) {
                fixedinterest.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-equities').on('click', function(event) {
                equities.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-property').on('click', function(event) {
                property.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-alternatives').on('click', function(event) {
                alternatives.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-liquidassets').on('click', function(event) {
                liquidassets.scrollIntoView({behavior: "smooth" });
        });
        $('.nav-performancerisk').on('click', function(event) {
                performancerisk.scrollIntoView({behavior: "smooth" });
        });
});

function showValue(newValue) {
        document.getElementById("range").innerHTML=newValue;
};

$(document).ready(function() {

    //for the two pie charts asset & currency allocations
    $('table.trade1').highchartTable();
    $('table.trade2').highchartTable();
    $('table.trade3').highchartTable();
    $('table.performance').highchartTable();
    $('table.asset-allocation').highchartTable();
    $('table.currency-allocation').highchartTable();
    $('table.uk-gdp').highchartTable();

    //small-charts at the top of the page
    $.plot($(".chart-placeholder1"), dataset, options);
    $.plot($(".chart-placeholder2"), dataset, options);
    $.plot($(".chart-placeholder3"), dataset, options);
    $.plot($(".chart-placeholder4"), dataset, options);
    $.plot($(".chart-placeholder5"), dataset, options);

// *******************************************************
//this filters which section to view by clicking
    //when i click on the profile element
    $('.primary-nav .nav-profile').on('click', function(event) {
        event.preventDefault();
        //if I click profile, it changes display on all other elements to 'none', and reveals just the profile div
        if ($('site-wrap .profile').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            //make just the profile element visible
        } else {
            $('site-wrap .profile').addClass('view')
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-profile').addClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-florescocommunity').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .florescocommunity').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .florescocommunity').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-florescocommunity').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-portfolio').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .portfolio').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .portfolio').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-portfolio').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-marketdata').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .marketdata').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .marketdata').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-marketdata').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });

    $('.primary-nav .nav-economics').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .economics').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .economics').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .trading').removeClass('view');

            $('.primary-nav .nav-economics').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-trading').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });
    $('.primary-nav .nav-trading').on('click', function(event) {
        event.preventDefault();
        if ($('site-wrap .trading').hasClass('view')) {
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');

            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');
            //make just the profile element visible
        } else {
            $('site-wrap .trading').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .florescocommunity').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .marketdata').removeClass('view');
            $('site-wrap .economics').removeClass('view');

            $('.primary-nav .nav-trading').addClass('selected');
            $('.primary-nav .nav-profile').removeClass('selected');
            $('.primary-nav .nav-florescocommunity').removeClass('selected');
            $('.primary-nav .nav-portfolio').removeClass('selected');
            $('.primary-nav .nav-marketdata').removeClass('selected');
            $('.primary-nav .nav-economics').removeClass('selected');

            $('.vanishing-title').addClass('vanish')
        }
    });
});

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
