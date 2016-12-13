

function menuDrop() {
	document.getElementsByClassName("menu-drop")[0].style.display="block";
	
	document.getElementsByClassName("menu-icon")[0].style.display="none";
	
	document.getElementsByClassName("close-icon")[0].style.display="inherit";
}

function menuClose() {
	document.getElementsByClassName("menu-drop")[0].style.display="none";
	
	document.getElementsByClassName("menu-icon")[0].style.display="inherit";
	
	document.getElementsByClassName("close-icon")[0].style.display="none";
}

function hide() {
	if (window.innerWidth < 768) {
		document.getElementsByClassName("menu-icon")[0].style.display="inherit";
		
		document.getElementsByClassName("close-icon")[0].style.display="none";
		
		document.getElementsByClassName("menu-drop")[0].style.display="none";
		
		document.getElementsByClassName("nav-bar")[0].style.display="none";
	}
	else if (window.innerWidth >= 768) {
		document.getElementsByClassName("menu-icon")[0].style.display="none";
		
		document.getElementsByClassName("close-icon")[0].style.display="none";
		
		document.getElementsByClassName("menu-drop")[0].style.display="none";
		
		document.getElementsByClassName("nav-bar")[0].style.display="inherit";
	}
	
}

window.addEventListener("resize", hide);