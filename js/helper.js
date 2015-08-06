//append this after topcontact appends email n phone number
//href="#!" prevents scrolling up to the begining of the
//page when 'MENU' is clicked from anywhere else on the page
//http://stackoverflow.com/questions/1601933/how-do-i-stop-a-web-page-from-scrolling-to-the-top-when-a-link-is-clicked-that-t/11246131#11246131-->
var HTMLnavMenuStart = '<a href="#!" id="nav-menu-icon">MENU</a><ul id="nav-list"></ul>';
var HTMLhrefNavList = '<li><a href="%data%">';
var HTMLcontentNavList = '%data%</a></li>';

var HTMLheaderStart = '<section class="header-my-info"></section>';
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h2 id="role">%data%</h2>';
var HTMLheaderLocation = '<h3>%data%</h3>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span>%data%</span></li>';
var HTMLmobile = '<li class="inline-block-list"><span class="purple-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="inline-block-list"><span class="purple-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="inline-block-list"><span class="purple-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="inline-block-list"><span class="purple-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class=class="purple-text">blog</span><span class="white-text">%data%</span></li>';

var HTMLwelcomeMsgStart = '<section class="header-welcome-msg"> </section>';
var HTMLwelcomeMsg = '<h5 class="welcome-msg">%data%</h5>';
var HTMLbiopicStart = '<div class="aboutme-details"></div>';
var HTMLbioPic = '<img src="%data%" class="biopic" alt="picture of myself" style= "width:100px;height:50px">';
var HTMLbiodescription = '<p class="aboutme-desc">%data%</p>';

var HTMLskillsStart = '<ul class="skills-entry"></ul>';
var HTMLskills = '<li class="inline-block-list skill-list"><span> <svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="#E6E6E6" stroke-width="2" fill="#e6e6e6"/>Sorry, your browser does not support inline SVG.<text x="50" y="50" font-size="20" text-anchor="middle" fill="#ba55d3">%data%<tspan x="50" dy="1em">%datatspan%</tspan></text></svg></span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p class="clear-both">%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text padded-date">%data%</div>';
var HTMLprojectDescription = '<p class="clear-both">%data%</p>';
var HTMLprojectImage = '<img src="%data%" alt="project snapshot">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolDegree = '<a href="#"><b>%data%</b>';
var HTMLschoolMajor = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text padded-date">%data%</div>';
var HTMLschoolLocation = '<div class="location-text padded-location">%data%</div>';
var HTMLschoolName = '<a class="normal-text clear-both" href="#">%data% </a>'

var HTMLonlineClasses = '<h3 class="center-header">Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text padded-date">%data%</div>';
var HTMLonlineURL = '<a href="#" class="online-url">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {


    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });


    var content_html = '<div class="map-html">' + name + '</div>';

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: content_html
    });

    // this opens the infowindow on mouseover event
    google.maps.event.addListener(marker, 'mouseover', function() {
      infoWindow.open(map,marker);
    });
      //// this closes the infowindow on mouseout event
      google.maps.event.addListener(marker, 'mouseout', function() {
      infoWindow.close(map,marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
