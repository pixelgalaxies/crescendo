// Javascript for Crescendo
// Author: Dustin Clark 2016

//Shout out to Edward Meyer for his big brain and helping me when I was stuck.



//displays dropdown items and switches icon
function menuDrop() {
	document.getElementsByClassName("menu-drop")[0].style.display="block";
	
	document.getElementsByClassName("menu-icon")[0].style.display="none";
	
	document.getElementsByClassName("close-icon")[0].style.display="inherit";
}


//closes dropdown items and switches icons
function menuClose() {
	document.getElementsByClassName("menu-drop")[0].style.display="none";
	
	document.getElementsByClassName("menu-icon")[0].style.display="inherit";
	
	document.getElementsByClassName("close-icon")[0].style.display="none";
}

//this function is called every time the window is resized
//will hide everything that needs to be hidden based on window size
function hide() {
	if (window.innerWidth < 768) {
		document.getElementsByClassName("menu-icon")[0].style.display="inherit";
		
		document.getElementsByClassName("close-icon")[0].style.display="none";
		
		document.getElementsByClassName("menu-drop")[0].style.display="none";
		
		document.getElementsByClassName("nav-bar")[0].style.display="none";
	}
	else {
		document.getElementsByClassName("menu-icon")[0].style.display="none";
		
		document.getElementsByClassName("close-icon")[0].style.display="none";
		
		document.getElementsByClassName("menu-drop")[0].style.display="none";
		
		document.getElementsByClassName("nav-bar")[0].style.display="inherit";
	}
	
}

window.addEventListener("resize", hide);