"use strict";
let isBubble = true;
const mainText = document.getElementById("mainText");

document.getElementById("change").addEventListener("click", () => {
	if (isBubble) {
		// 泡を入れる
		bubbly({
			blur: 1,
			colorStart: "#003366",
			colorStop: "#000000",
			bubbles: 30,
			radiusFunc: () => Math.random() * 2,
			angleFunc: () => -Math.PI / 1.5,
			velocityFunc: () => Math.random() * 4,
			bubbleFunc: () => `hsla(${200 + Math.random() * 50}, 100%, 90%, .8)`,
			bubbles: 50,
			compose: "source-over",
		});
		mainText.style.visibility = "visible";
		mainText.style.color = "#ffffe0";
		document.getElementById("change").textContent = "無地壁紙に変更";
		isBubble = false;
	} else {
		// 無地に変更
		bubbly({
			blur: 0.1,
			colorStart: "#f0f8ff",
			colorStop: "#f0f8ff",
			radiusFunc: () => Math.random() * 0,
			angleFunc: () => -Math.PI / 0,
			velocityFunc: () => Math.random() * 0,
			bubbleFunc: () => `hsla(${200 + Math.random() * 50}, 100%, 90%, .8)`,
			bubbles: 0,
			compose: "source-over",
		});
		document.getElementById("change").textContent = "動的壁紙に変更";
		mainText.style.color = "#000000";
		isBubble = true;
	}
});
