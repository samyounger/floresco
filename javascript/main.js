function showValue(newValue) {
        document.getElementById("range").innerHTML=newValue;
    };

$(document).ready(function() {

    //for the two pie charts asset & currency allocations
    $('table.asset-allocation').highchartTable();
    $('table.currency-allocation').highchartTable();

    //small-charts at the top of the page
    $.plot($(".chart-placeholder"), dataset, options);
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
