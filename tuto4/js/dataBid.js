var myData =[25,12,8,10,24];
//console.log(myData)
//One paragraph asociated with each variable inside DAta

//Data Binding: VERY IMPORTANT !!!!!!
//Here is binding data to each paragraph, it looks what is inside the DOM (html)
var chart = d3.select("#chart")

var ps = chart.selectAll("p")
.data(myData);

ps.enter()
  .append("p") //Selections from here are applied just to the new paragraphs.
  .text("Yahoo");

ps.style("font-size", "15pt");
