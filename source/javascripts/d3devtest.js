/*
 * $(function() {
var margin = {top: 20, right: 20, bottom: 30, left: 40},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

// スケールと出力レンジの定義
var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
        .range([height, 0]);

// 軸の定義
var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10, "%");

// svgの定義
var svg = d3.select(".jumbotron h1").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// データを読み込む
//d3.tsv("data.tsv", type, function(error, data) {
    // データを入力ドメインとして設定
    var data = [
      {letter:"A",frequency:".5"},
      {letter:"B",frequency:".9"},
      {letter:"C",frequency:".1"},
      {letter:"D",frequency:".3"},
      {letter:"E",frequency:".9"},
      {letter:"F",frequency:".3"},
      {letter:"G",frequency:".9"},
      {letter:"H",frequency:".2"},
      {letter:"I",frequency:".5"},
      {letter:"J",frequency:".6"},
      {letter:"K",frequency:".7"},
      {letter:"L",frequency:".7"},
      {letter:"M",frequency:".1"},
      {letter:"N",frequency:".1"},
    ];
    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

    // x軸をsvgに表示
    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

    // y軸をsvgに表示
    svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("Frequency");

    // 棒グラフを表示
    svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.letter); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.frequency); })
            .attr("height", function(d) { return height - y(d.frequency); });

//});

function type(d) {
    d.frequency = +d.frequency;
    return d;
}
});
