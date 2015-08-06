// bio object and its function
var bio = {
	"name": "Poonam Gupta",
	"role": "Web Developer",
	"contacts": {
		"mobile": 123456789,
		"email": "pg1234@gmail.com",
		"twitter": "@pg123",
		"github": "poonamgp14",
		"location":"Saint Louis, MO"
	},
	"welcomeMessage": "Welcome to purple-glare!!",
	"biopic" : "images/fry.jpg",
	"aboutme" : "I am a biotechnologist by degree. After having worked in data" +
				" management at various life-science companies for 3 years, " +
				"I have found my passion in programming and web developement. " +
				"I often have wow moments learning and playing around different tools" +
				" to create beautiful visual experiences over the web.",
	"skills": ["HTML5","CSS3","JS","SQL","Perl","Python","life-Science","Clinical Trails"],
	display: function(){
		var formattedName = HTMLheaderName.replace('%data%',bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
		var formattedLocation = HTMLheaderLocation.replace('%data%',bio.contacts.location);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%',bio.welcomeMessage);
		var formattedBioPic = HTMLbioPic.replace('%data%',bio.biopic);
		var formattedBioDesc = HTMLbiodescription.replace('%data%',bio.aboutme);

		$("#header").append(HTMLheaderStart);
		$(".header-my-info").append(formattedName);
		$(".header-my-info").append(formattedRole);
		$(".header-my-info").append(formattedLocation);
		$("#header").append(HTMLwelcomeMsgStart);
		$(".header-welcome-msg").append(formattedWelcomeMsg);
		$(".header-welcome-msg").append(HTMLbiopicStart);
		$(".aboutme-details").append(formattedBioPic);
		$(".aboutme-details").append(formattedBioDesc);


		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);


		var formattedConnect = formattedMobile + formattedEmail + formattedTwitter + formattedGithub;
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedConnect);


		if (bio.skills.length >=1){
			$("#skills").append(HTMLskillsStart);
			for (i=0; i < bio.skills.length; i++){
				var str = bio.skills[i];
				//checks if there is any special character like - or space
				var res = str.match(/[^A-Za-z0-9]/g);
				if (res){
					str_array = str.split(res);
					var str_array_first_value = str_array[0] + res;
					var formattedHTMLskillsIfData = HTMLskills.replace('%data%',str_array_first_value);
					//<tspan> helps in multi-line text in SVG - http://schepers.cc/its-a-wrap
					var formattedHTMLskillsIfData_tspan = formattedHTMLskillsIfData.replace('%datatspan%',str_array[1]);
					$(".skills-entry").append(formattedHTMLskillsIfData_tspan);
				}
				else{
					var tspan_value = '';
					var formattedHTMLskillsElseData = HTMLskills.replace('%data%',str);
					var formattedHTMLskillsElseData_tspan = formattedHTMLskillsElseData.replace('%datatspan%',tspan_value);
					$(".skills-entry").append(formattedHTMLskillsElseData_tspan);
				}
			}
		};
	}
};
bio.display();


// navigation menu object
var navMenu = {
	menuItems : [
	{
		"hrefValue" : "#header",
		"contentValue" : "About Me"
	},
	{
		"hrefValue" : "#workExperience",
		"contentValue" : "Work Experience"
	},
	{
		"hrefValue" : "#projects",
		"contentValue" : "Projects"
	},
	{
		"hrefValue" : "#education",
		"contentValue" : "Education"
	},
	{
		"hrefValue" : "#skills",
		"contentValue" : "Skills"
	},
	{
		"hrefValue" : "#lets-connect",
		"contentValue" : "Contact"
	}
	],
	display: function(){
		$(".nav-main").append(HTMLnavMenuStart);
		for (menuItem in navMenu.menuItems){
			var formattedHTMLhrefNavList = HTMLhrefNavList.replace("%data%",navMenu.menuItems[menuItem].hrefValue);
			var formattedHTMLcontentNavList = HTMLcontentNavList.replace("%data%",navMenu.menuItems[menuItem].contentValue);
			var formattednavList = formattedHTMLhrefNavList + formattedHTMLcontentNavList;
			$("#nav-list").append(formattednavList);
		}
	}
};

navMenu.display();


// work object and its function
var work = {
	"jobs": [
 	{
		"title": "Business Intelligence Intern",
		"employer" : "Binary Way LLC",
		"dates" : "Jan 2013 - Jun 2013",
		"description" : "This is description of Business Intelligence Internjob",
		"location" : "Delhi,India"
	},
	{
 		"title": "Clinical Data Co-ordinator",
		"employer" : "Pharmascent",
		"dates" : "Mar 2012 - Nov 2012",
		"description" : "This is description of Clinical Data Co-ordinator job",
		"location" : "Overland Park, KS"
	},
	{
		"title": "Quality Assurance Associate",
		"employer" : "Kelly Resources",
		"dates" : "Jul 2011 - Mar 2012",
		"description" : "This is description of Quality Assurance Associate job",
		"location" : "Saint Louis, MO"
	},
	{
		"title": "Scientific Reference Data Curator",
		"employer" : "Envision",
		"dates" : "Dec 2010 - May 2011",
		"description" : "This is description of Scientific Reference Data Curator job",
		"location" : "Saint Louis, MO"
	},
	{
		"title": "Research Associate",
		"employer" : "Georgetown University",
		"dates" : "Jan 2010 - Dec 2010",
		"description" : "This is description of Research Associate job",
		"location" : "Washington, DC"
	}
	],
	display: function(){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedworkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedworkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedworkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			var formattedworkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			var formattedworkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			var formattedEmployerTitle = formattedworkEmployer + formattedworkTitle;

			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedworkDates);
			$(".work-entry:last").append(formattedworkLocation);
			$(".work-entry:last").append(formattedworkDescription);
		}
	}
};

work.display();


// projects object
var projects = {
	"projects":[
	{	"title" : "Frogger Game",
		"dates" : 2015,
		"description" : "This is description of frogger game",
		"images": "images/projects.gif"
	},
	{	"title" : "Neighborhood Map",
		"dates" : 2015,
		"description" : "This is description of neighborhood map",
		"images": "images/projects.gif"

	}
   ],
   display: function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);

			$(".project-entry:last").append(formattedprojectTitle);
			$(".project-entry:last").append(formattedprojectDates);
			$(".project-entry:last").append(formattedprojectDescription);
			$(".project-entry:last").append(formattedprojectImage);
		}
	}
};

projects.display();

//education object
//education is an object which contains two arrays- schools and onlineCourses
//'schools' is a list contained within education object. It further has school object and each 'school' object has a list for majors
var education = {
	"schools":[
	{
		"name": "Georgetown University",
		"location": "Washington, DC",
		"degree": "Master of Science",
		"majors": ["Biotechnology Business"],
		"dates" : 2010,
		"url" : "http://www.georgetown.edu/"

	},
	{
		"name": "Bangalore University",
		"location": "Bangalore,India",
		"degree": "Bachelor of Science",
		"majors": ["Biotechnology"],
		"dates" : 2007,
		"ulr" : "http://bangaloreuniversity.ac.in/"
	}
	],
	"onlineCourses": [
	{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.udacity.com"
	},
	{
		"title": " Introduction to Programming Nanodegree",
		"school": "Udacity",
		"dates": 2015,
		"url": "www.udacity.com"
	}
	],
	display: function(){
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);
			var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			var formattedDegreeAndMajor = formattedschoolDegree + formattedschoolMajor;


			$(".education-entry:last").append(formattedDegreeAndMajor);
			$(".education-entry:last").append(formattedschoolDates);
			$(".education-entry:last").append(formattedschoolName);
			$(".education-entry:last").append(formattedschoolLocation);
		}
		$("#education").append(HTMLonlineClasses);

		for (onlineCourse in education.onlineCourses){
			$("#education").append(HTMLschoolStart);
			var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
			var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
			var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
			var formattedHTMLonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
			var formattedOnlineSchoolAndTitle = formattedonlineTitle + formattedonlineSchool;

			$(".education-entry:last").append(formattedOnlineSchoolAndTitle);
			$(".education-entry:last").append(formattedonlineDates);
			$(".education-entry:last").append(formattedHTMLonlineURL);
		}
	}
};
education.display();

//Google Map API - Where I lived and Worked!!
$("#mapDiv").append(googleMap);
























