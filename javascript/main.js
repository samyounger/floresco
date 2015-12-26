$(document).ready(function () {
    $('table.highchart').highchartTable();

    //when i click on the profile element
    $('.primary-nav .nav-profile').on('click',function(event){
        event.preventDefault();
        //if I click profile, it changes display on all other elements to 'none', and reveals just the profile div
        if($('site-wrap .profile').hasClass('view')){
            //remove the view class from others
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
            //make just the profile element visible
        } else {
            $('site-wrap .profile').addClass('view')
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
        }
    });

    $('.primary-nav .nav-blog').on('click',function(event){
            event.preventDefault();
        if($('site-wrap .blog').hasClass('view')){
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
            //make just the profile element visible
        } else {
            $('site-wrap .blog').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
        }
    });

    $('.primary-nav .nav-portfolio').on('click',function(event){
            event.preventDefault();
        if($('site-wrap .portfolio').hasClass('view')){
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
            //make just the profile element visible
        } else {
            $('site-wrap .portfolio').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
        }
    });

    $('.primary-nav .nav-economics').on('click',function(event){
            event.preventDefault();
        if($('site-wrap .economics').hasClass('view')){
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
            //make just the profile element visible
        } else {
            $('site-wrap .economics').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            $('site-wrap .following').removeClass('view');
        }
    });

    $('.primary-nav .nav-trading').on('click',function(event){
            event.preventDefault();
        if($('site-wrap .trading').hasClass('view')){
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .following').removeClass('view');
            //make just the profile element visible
        } else {
            $('site-wrap .trading').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .following').removeClass('view');
        }
    });
    $('.primary-nav .nav-following').on('click',function(event){
            event.preventDefault();
        if($('site-wrap .following').hasClass('view')){
            //remove the view class from others
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
            //make just the profile element visible
        } else {
            $('site-wrap .following').addClass('view')
            $('site-wrap .profile').removeClass('view');
            $('site-wrap .blog').removeClass('view');
            $('site-wrap .portfolio').removeClass('view');
            $('site-wrap .economics').removeClass('view');
            $('site-wrap .trading').removeClass('view');
        }
    });
});


$(document).ready(function () {
    $.plot($(".chart-placeholder"), dataset, options);
});

var data = [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]];

var dataset = [{data: data}];

var options = {
    series: {
        lines: { show: true },
        points: {
            radius: 1,
            show: false
        }
    }
};

$(document).ready(function () {
    $.plot($(".chart-placeholder"), dataset, options);
});

var data = [[1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370], [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]];

var dataset = [{data: data}];

var options = {
    series: {
        lines: { show: true },
        points: {
            radius: 1,
            show: false
        }
    }
};
