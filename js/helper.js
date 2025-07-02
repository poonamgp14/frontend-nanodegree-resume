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
var HTMLblog = '<li class="inline-block-list"><span class="purple-text">Code</span><span class="white-text">%data%</span></li>';

var HTMLwelcomeMsgStart = '<section class="header-welcome-msg"> </section>';
var HTMLwelcomeMsg = '<h5 class="welcome-msg">%data%</h5>';
var HTMLbiopicStart = '<div class="aboutme-details"></div>';
var HTMLbioPic = '<img src="%data%" class="biopic" alt="picture of myself" style= "width:100px;height:50px">';
var HTMLbiodescription = '<p class="aboutme-desc">%data%</p>';

var HTMLskillsStart = '<ul class="skills-entry"></ul>';
var HTMLskills = '<li class="inline-block-list skill-list"><span> <svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="#E6E6E6" stroke-width="2" fill="#e6e6e6"/>Sorry, your browser does not support inline SVG.<text x="50" y="50" font-size="20" text-anchor="middle" fill="#ba55d3">%data%<tspan x="50" dy="1em">%datatspan%</tspan></text></svg></span></li>';

// var HTMLworkStart = '<div class="work-entry"></div>';
// var HTMLworkEmployer = '<a href="#">%data%';
// var HTMLworkTitle = ' - %data%</a>';
// var HTMLworkDates = '<div class="date-text">%data%</div>';
// var HTMLworkLocation = '<div class="location-text">%data%</div>';
// var HTMLworkDescription = '<p class="clear-both">%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href=%data% target="_blank"><span>';
var HTMLprojectCode = '%data%</span></a>';
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
