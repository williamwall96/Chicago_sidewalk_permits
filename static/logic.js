d3.json("http://127.0.0.1:5000/api/permitsPerYear").then(function(data) {
  console.log(data)
  createBarChart(data)
})

function createBarChart(data) {
  console.log("create bar chart running")
    var trace1 = {
        x: data.map(d => d.Year),
        y: data.map(d => d.numPermits),
        type: "bar"
      };
     
      var chartData = [trace1];
      
      var layout = {
        title: "'Bar' Chart",
        xaxis: { title: "Year"},
        yaxis: { title: "Number of Sidewalk Cafe Permits"}
      };
      
      Plotly.newPlot("bar-chart", chartData, layout);
}
