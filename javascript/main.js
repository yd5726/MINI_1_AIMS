window.addEventListener("DOMContentLoaded", function() {
	setTimeout(showAfterLoad, 500);
	const POPUP = document.querySelector("#popup");
	const BODY = document.querySelector("body");
	const CLOSE = document.querySelector("#close");
	const POSTS = document.querySelector("#posts");

	function showAfterLoad() {
		POPUP.style.display = "block";
		BODY.style.overflow = "hidden";
	};
	CLOSE.addEventListener("click", function() {
		POPUP.style.display = "none";
		BODY.style.overflow = "auto";
	});

	let postIndex = 0;
	const PREV = document.querySelector(".prev");
	PREV.addEventListener("click", function() {
		postIndex--;
		if (postIndex < 0) {
			postIndex = 1;
		}
		let coords = -940 * postIndex;
		POSTS.style.marginLeft = coords + "px";
	});
	const NEXT = document.querySelector(".next");
	NEXT.addEventListener("click", function() {
		postIndex++;
		if (postIndex > 1) {
			postIndex = 0;
		}
		let coords = -940 * postIndex;
		POSTS.style.marginLeft = coords + "px";
	});
});