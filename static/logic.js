d3.json("http://127.0.0.1:5000/api/test").then(function(data) {
  console.log(data)
  // createBarChart(data)
  createMap(data);

  var twentyFifteen = []
  var twentySixteen = []
  var twentySeventeen = []
  var twentyEighteen = []
  var twentyNineteen = []
  var twentyTwenty = []

  // Make function filter for each Year
  function sortData(objects) {
    for (var i = 0; i < objects.length; i++) {
      
      // sort year 2015
      if (objects[i].year == "2015") {
        twentyFifteen.push(objects[i])
      }
      
      // sort year 2016
      else if (objects[i].year == "2016") {
        twentySixteen.push(objects[i]);
      }
      
      // sort year 2017
      else if (objects[i].year == "2017") {
        twentySeventeen.push(objects[i]);
      }

      // sort year 2018
      else if (objects[i].year == "2018") {
        twentyEighteen.push(objects[i]);
      }

      // sort year 2019
      else if (objects[i].year == "2019") {
        twentyNineteen.push(objects[i]);
      }
      
      // sort year 2020
      else if (objects[i].year == "2020") {
        twentyTwenty.push(objects[i]);
      }
    };
  };

  sortData(data);

  console.log(twentyFifteen);
  console.log(twentySixteen);
  console.log(twentySeventeen);
  console.log(twentyEighteen);
  console.log(twentyNineteen);
  console.log(twentyTwenty);

  function twentyTwentyMarkers(){

    // Create a new marker cluster group
    var markers = L.markerClusterGroup();

    // For loop to map twentyTwenty Data
    for (var i = 0; i < twentyTwenty.length; i++) {

      // Set the data latitude property to a variable
      var latitude = twentyTwenty[i].latitude
      
      // Set the data longitude property to a variable
      var longitude = twentyTwenty[i].longitude

      // set location and define it to variable
      var location = [latitude, longitude]

      // Check the location variable
      if (location) {
        markers.addLayer(L.marker(location).bindPopup(twentyTwenty[i].business_name));
      }

    }
  myMap.addLayer(markers);
  }

  function twentyNineteenMarkers(){

    // Create a new marker cluster group
    var markers = L.markerClusterGroup();

    // For loop to map twentyTwenty Data
    for (var i = 0; i < twentyNineteen.length; i++) {

      // Set the data latitude property to a variable
      var latitude = twentyNineteen[i].latitude
      
      // Set the data longitude property to a variable
      var longitude = twentyNineteen[i].longitude

      // set location and define it to variable
      var location = [latitude, longitude]

      // Check the location variable
      if (location) {
        markers.addLayer(L.marker(location).bindPopup(twentyNineteen[i].business_name));
      }

    }
  myMap.addLayer(markers);
  }

  d3.selectAll('#button-2020').on("click", twentyTwentyMarkers());
  d3.selectAll('#button-2020').on("click", twentyNineteenMarkers());


});

function createMap() {
  myMap = L.map("mapid", {
    center: [41.87, -87.63],
    zoom: 13
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
};

// BAR CHART CODE FOR PROJECT 2
// function createBarChart(data) {
//   console.log("create bar chart running")
//     var trace1 = {
//         x: data.map(d => d.year),
//         y: data.map(d => d.numPermits),
//         type: "bar"
//       };
     
//       var chartData = [trace1];
      
//       var layout = {
//         title: "'Bar' Chart",
//         xaxis: { title: "Year"},
//         yaxis: { title: "Number of Sidewalk Cafe Permits"}
//       };
      
//       Plotly.newPlot("bar-chart", chartData, layout);