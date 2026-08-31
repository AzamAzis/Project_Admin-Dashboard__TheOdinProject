// Test
const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
	menu.addEventListener("click", (event) => {
		console.log("all");
	});
});