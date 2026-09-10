// ||DASHBOARD ANIMATION
const dashboardBtn = document.querySelector(".dashboard");
const sidebar = document.querySelector(".sidebar");
const menuLinks = document.querySelectorAll(".menu__link");


dashboardBtn.addEventListener("click", () => {
	sidebar.classList.toggle("__open");
	document.body.classList.toggle("__open");

	if (sidebar.classList.contains("__open")) {
		// document.body.style.overflow = "hidden";
		sidebar.setAttribute("aria-modal", "true");
		sidebar.setAttribute("role", "modal");
	} else {
		// document.body.style.overflow = "visible";
		sidebar.removeAttribute("aria-modal");
		sidebar.removeAttribute("role");
	}
});

// ||SEARCH
const searchBox = document.querySelector(".search .__box");
const deleteSearch = document.querySelector(".search .__delete");

searchBox.addEventListener("input" , (event) => {
	if (event.currentTarget.value) {
		deleteSearch.classList.add("__visible");
	} else {
		deleteSearch.classList.remove("__visible");
	}
});

deleteSearch.addEventListener("click", (event) => {
	searchBox.value = "";
	event.currentTarget.classList.remove("__visible");
});

// ||ADD TO FAVORITE
const favoriteBtns = document.querySelectorAll(".favorite");
const starPluses = document.querySelectorAll(".star-plus");

let favChecked = false;


favoriteBtns.forEach((btn, p) => {
	btn.addEventListener("click", (event) => {
		starPluses.forEach((star, c) => {
			if (!favChecked && (p === c)) {
				star.src = "assets/img/star-check.svg";
				star.alt = "Added to favorite";
				favChecked = true;
			} else if (favChecked && (p === c)) {
				star.src = "assets/img/star-plus.svg";
				star.alt = "Add to favorite";
				favChecked= false;
			}
		});
	});
});

// ||WATCH LIST
const watchListBtns = document.querySelectorAll(".watch-list");
const eyePluses = document.querySelectorAll(".eye-plus");

let watchChecked = false;

watchListBtns.forEach((btn, p) => {
	btn.addEventListener("click", (event) => {
		eyePluses.forEach((eye, c) => {
			if (!watchChecked && (p === c)) {
				eye.src = "assets/img/eye-check.svg";
				eye.alt = "Watch Listed.";
				watchChecked = true;
			} else if (watchChecked && (p === c)) {
				eye.src = "assets/img/eye-plus.svg";
				eye.alt = "Watch list.";
				watchChecked = false;
			}
		});
	});
});

// ||PROJECTS

const projectsContainer = document.querySelector(".projects");
const projectCards = projectsContainer.querySelectorAll(".__card");
const showProjectsBtn = document.querySelector(".show-project");

const projectContainerCurrentHeight = Number.parseInt(projectsContainer.getBoundingClientRect().height, 10);
const projects = Array.from(projectCards);

projects.forEach((item) => {
	item.classList.add("__hidden");
});

const displayProject = 2;
let initialIndexProject = 0;

let prevIndexProject;

function showProject() {
	const next = projects.slice(0, initialIndexProject + displayProject);

	next.forEach((item) => {
		item.classList.remove("__hidden");
	});

	projectsContainer.style.height =
		`${projectContainerCurrentHeight / (projects.length / next.length)}px`
	;

	if (prevIndexProject === initialIndexProject) {
		showProjectsBtn.textContent = "Show More";
		projectsContainer.scrollIntoView({
			block: "start",
			inline: "start",
			behavior: "smooth",
		});

		setTimeout(() => {
			const prev = projects.slice(initialIndexProject);
			prev.forEach((item) => {
				item.classList.add("__hidden");
			});
		}, 1000);

		prevIndexProject = undefined;
	}

	if (next.length === projects.length) {
		showProjectsBtn.textContent = "Show Less";
		initialIndexProject = -displayProject;
		prevIndexProject = 0;
	}

	initialIndexProject += displayProject;
}

showProject();

showProjectsBtn.addEventListener("click", () => {
	showProject();
});
