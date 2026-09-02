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

document.documentElement.addEventListener("scroll", (event) => {
	document.documentElement.classList.add("scroll");
});