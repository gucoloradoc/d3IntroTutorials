var myData = [12,25,30,12];
var chart = d3.select("#chart");

var redraw = function (_localData){
  var items = chart.selectAll("p")
    .data(_localData);
  items.enter()
    .append("p");
  items
    .style("font-size", function(d){
      return d + "pt";
    })
    .text(function(d){
      return "size = " + d;
    });
  items.exit().remove();
};
redraw(myData);
