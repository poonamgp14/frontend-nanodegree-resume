// bio object and its function
var bio = {
	"name": "Poonam Gupta",
	"role": "Senior Software Engineer",
	"contacts": {
		"mobile": "(314)-482-3499",
		"email": "ppgupt1@gmail.com",
		"twitter": "@pg123",
		"github": "poonamgp14",
		"location":"Saint Louis, MO",
		"resume": "https://github.com/poonamgp14/frontend-nanodegree-resume"
	},
	"welcomeMessage": "Welcome to Junk-Head!!",
	"biopic" : "images/fry.jpg",
	"aboutme" : "Hey there! Anybody can write code that a computer can understand. Good programmers write code that humans can understand. And, I write good deployable code and develop things! If not coding, you can find me getting better at CrossFit, learning Indian Classical dance or taking Improv Classes",
	"skills": ["AWS","Java","Python","JS","SQL","NoSQL","API", "LeaderShip"],
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
		var formattedCode = HTMLblog.replace("%data%",bio.contacts.resume);

		var formattedConnect = formattedMobile + formattedEmail + formattedGithub + formattedCode;
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
	// {
	// 	"hrefValue" : "#workExperience",
	// 	"contentValue" : "Work Experience"
	// },
	{
		"hrefValue" : "#projects",
		"contentValue" : "Projects"
	},
	{
		"hrefValue" : "#education",
		"contentValue" : "Certification"
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


// projects object
var projects = {
	"projects":[
	{	"title" : "Frogger Game",
		"CodeLink" : "https://poonamgp14.github.io/frontend-nanodegree-arcade-game/#",
		"description" : "Vanilla JavaScript Object-Oriented Programming based Arcade Game",
	},
	{	"title" : "SuperDuperDrive",
		"CodeLink" : "https://github.com/poonamgp14/SuperDuperDrive",
		"description" : "Spring Boot and Thymeleaf based Personal Cloud Storage",
	},
	{	"title" : "Critter",
		"CodeLink" : "https://github.com/poonamgp14/critter/tree/main",
		"description" : "Critter is a Software as a Service application that provides a scheduling interface for a small business that takes care of animals. This Spring Boot project will allow users to create pets, owners, and employees, and then schedule events for employees to provide services for pets.",
	},
	{	"title" : "In-Progress",
		"CodeLink" : "#",
		"description" : "Real-time Streaming SpringBoot/Kafka Application analyzing posts from Bluesky Social Media",
	}
   ],
   display: function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);
			var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].CodeLink);
			var formattedprojectCode = HTMLprojectCode.replace("%data%",projects.projects[project].title);
			var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			// var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);

			$(".project-entry:last").append(formattedprojectTitle + formattedprojectCode);
			//$(".project-entry:last").append(formattedprojectCode);
			$(".project-entry:last").append(formattedprojectDescription);
			// $(".project-entry:last").append(formattedprojectImage);
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
		"degree": "AWS Certified Solition Architect",
		"majors": ["Professional"],
		"dates" : "May 2024 - May 2027"

	},
	{
		"degree": "Google Cloud Certified Developer",
		"majors": ["Associate"],
		"dates" : "Dec 2022",
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
			// $(".education-entry:last").append(formattedschoolName);
			// $(".education-entry:last").append(formattedschoolLocation);
		}
	}
};
education.display();

























