
d3.json("http://127.0.0.1:5000/api/permitsPerYear").then(function(data) {
  console.log(data)
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

  var years = {
    "2015": twentyFifteen.length,
    "2016": twentySixteen.length,
    "2017": twentySeventeen.length,
    "2018": twentyEighteen.length,
    "2019": twentyNineteen.length,
    "2020": twentyTwenty.length
  };
  createBarChart(years);
<<<<<<< HEAD

  function filterMap(filterData){
=======
    function filterMap(filterData){
>>>>>>> 78a34bc1a4dda010847ca9d8a39a163671b934e9

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

<<<<<<< HEAD
  
=======
>>>>>>> 78a34bc1a4dda010847ca9d8a39a163671b934e9

  
function createMap() {
  myMap = L.map("mapid", {
    center: [41.87, -87.63],
    zoom: 11
  });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
};

});
<<<<<<< HEAD

function createBarChart(data) {
  console.log("bar chart running")

  var trace1 = {
    x: Object.keys(data),
    y: Object.values(data),
    type: "bar"
  };
  var chartData = [trace1];
  console.log(chartData)

  var layout = {
    title: "Chicago Sidewalk Permits",
    xaxis: {title: "Year"},
    yaxis: {title: "Number of Sidewalk Cafe Permits"}
  };
  Plotly.newPlot("bar-chart", chartData, layout)

};
=======
// BAR CHART CODE FOR PROJECT 2
function createBarChart(data) {
  console.log("create bar chart running")
    var trace1 = {
       x: Object.keys(data),
       y: Object.values(data),
        type: "bar"
      };
      var chartData = [trace1];
      console.log(chartData)
      var layout = {
        title: "Chicago Sidewalk Permits",
        xaxis: { title: "Year"},
        yaxis: { title: "Number of Sidewalk Cafe Permits"}
      };
      Plotly.newPlot("bar-chart", chartData, layout)
};

>>>>>>> 78a34bc1a4dda010847ca9d8a39a163671b934e9
