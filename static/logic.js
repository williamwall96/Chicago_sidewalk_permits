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

  // console.log(twentyFifteen);
  // console.log(twentySixteen);
  // console.log(twentySeventeen);
  // console.log(twentyEighteen);
  // console.log(twentyNineteen);
  // console.log(twentyTwenty);

  function filterMap(filterData){

    // Create a new marker cluster group
    var markers = L.markerClusterGroup();

    // For loop to map twentyTwenty Data
    for (var i = 0; i < filterData.length; i++) {

      // Set the data latitude property to a variable
      var latitude = filterData[i].latitude
      
      // Set the data longitude property to a variable
      var longitude = filterData[i].longitude

      // set location and define it to variable
      var location = [latitude, longitude]

      // Check the location variable
      if (location) {
        markers.addLayer(L.marker(location).bindPopup(filterData[i].business_name));
      }

    }
    myMap.eachLayer((layer) => {

      myMap.removeLayer(layer);
        });
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);
  myMap.addLayer(markers);
  }

  d3.selectAll('#button-2020').on("click", () => {
    console.log("2020 hits");
    filterMap(twentyTwenty);
  });
  d3.selectAll('#button-2019').on("click", () => {
    console.log("2019 hits");
    filterMap(twentyNineteen);
  });
  d3.selectAll('#button-2018').on("click", () => {
    console.log("2018 hits");
    filterMap(twentyEighteen);
  });
  d3.selectAll('#button-2017').on("click", () => {
    console.log("2017 hits");
    filterMap(twentySeventeen);
  });
  d3.selectAll('#button-2016').on("click", () => {
    console.log("2016 hits");
    filterMap(twentySixteen);
  });
  d3.selectAll('#button-2015').on("click", () => {
    console.log("2015 hits");
    filterMap(twentyFifteen);
  });

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

// };

function createMap() {
  myMap = L.map("mapid", {
    center: [41.87, -87.63],
    zoom: 13
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
};

});
