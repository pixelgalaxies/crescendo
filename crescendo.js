// function for navigation
document.querySelector(".nav-icon").addEventListener("click", function() {
	document.querySelector(".nav-list").classList.toggle("mobile-show");
	document.querySelector(".nav-icon").classList.toggle("close");
	if (document.querySelector(".nav-icon").classList.contains("close")) {
		document.querySelector(".nav-icon--close").style.display = "inherit";
		document.querySelector(".nav-icon--menu").style.display = "none";
	} else {
		document.querySelector(".nav-icon--close").style.display = "none";
		document.querySelector(".nav-icon--menu").style.display = "inherit";
	}
});

// function for topples
const topples = Array.from(document.querySelectorAll(".topple"));
for (let i = 0; i < topples.length; i++) {
	topples[i].addEventListener("click", function() {
		let dataTopple = this.getAttribute("data-topple");
		let toTopple = document.querySelector("#" + dataTopple);
		if (toTopple.classList.contains("tidy")) {
			toTopple.classList.remove("tidy");
			toTopple.classList.add("spilled");
		} else {
			toTopple.classList.remove("spilled");
			toTopple.classList.add("tidy");
		}
	});
}
