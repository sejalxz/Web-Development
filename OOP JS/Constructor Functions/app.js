// function hex(r, g, b){
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b){
//     return `rgb(${r}, ${g}, ${b})`;
// }

// hex(255,100,25);
// rgb(255,100,25);

// function makeColor(r, g, b) {
// 	const color = {};
// 	color.r = r;
// 	color.g = g;
// 	color.b = b;
// 	color.rgb = function() {
// 		const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// 	};
// 	color.hex = function() {
// 		const { r, g, b } = this;
// 		return (
// 			'#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// 		);
// 	};
// 	return color;
// }

// //Creating Object 
// const firstColor = makeColor(35,255,150);
// console.log(firstColor.hex());

function Color (r,g,b){
	this.r = r;
	this.g = g;
	this.b = b;
}

Color.prototype.rgb = function(){
	const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.rgba = function(a = 1.0){
	const { r, g, b } = this;
		return `rgb(${r}, ${g}, ${b}, ${a})`;
}


const color1 = new Color(25,255,50);
document.body.style.backgroundColor = color1.rgba(0.8);