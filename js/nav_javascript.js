$(document).ready(function(){
	$("#nav-menu-icon").click(function(){
		$("nav.nav-main").toggleClass("nav-main-clicked");
	});
	$("nav ul li a").click(function(){
		$("nav.nav-main-clicked").removeClass("nav-main-clicked");
	});
});