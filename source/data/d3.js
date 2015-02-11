(function() {
  $(function() {
    var data, height, margin, svg, width, x, xAxis, y, yAxis;
    margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    };
    width = 960 - margin.left - margin.right;
    height = 500 - margin.top - margin.bottom;
    x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
    y = d3.scale.linear().range([height, 0]);
    xAxis = d3.svg.axis().scale(x).orient("bottom");
    yAxis = d3.svg.axis().scale(y).orient("left").ticks(10, "%");
    svg = d3.select(".graph").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    data = [
      { letter: "A", frequency: ".5"},
      { letter: "B", frequency: ".9"},
      { letter: "C", frequency: ".1"},
      { letter: "D", frequency: ".3"},
      { letter: "E", frequency: ".5"},
      { letter: "F", frequency: ".9"},
      { letter: "G", frequency: ".8"},
      { letter: "H", frequency: ".9"},
      { letter: "I", frequency: ".4"},
      { letter: "J", frequency: ".3"},
      { letter: "K", frequency: ".2"},
      { letter: "L", frequency: ".1"},
      { letter: "M", frequency: ".7"},
      { letter: "N", frequency: ".7"}
    ];
    x.domain(data.map(function(d) {
      return d.letter;
    }));
