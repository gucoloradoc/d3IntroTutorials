d3.select("#chart")
  .append("p")
  .text("Added by d3.js");

d3.select("p.big")
  .style("background-color","yellow");

//Javascript allows to make commands in cascade.
d3.select("h2")
  .text("New title")
  .style("color","blue")
  .style("font-size","40pt");

d3.selectAll("p") //The difference with select is that this one select all the elements.
  .style("color", "red");
//Using classes
d3.selectAll("p.big") //The difference with select is that this one select all the elements.
  .style("font-size", "20pt");

d3.selectAll("#chart p") //The difference with select is that this one select all the elements.
  .style("color", "purple");

//d3.select("body").append("h1").text("Added Header") //Ad a header in the body
