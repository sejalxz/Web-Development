// function Color (r,g,b){
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }

// Color.prototype.rgb = function(){
// 	const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b})`;
// }

// Color.prototype.rgba = function(a = 1.0){
// 	const { r, g, b } = this;
// 		return `rgb(${r}, ${g}, ${b}, ${a})`;
// }

class Color {
	constructor(r, g, b, name){
		// console.log("INSIDE CONSTRUCTOR");
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
		// this.colorName = name;
	}	
	changeBodyColor(){
		document.body.style.backgroundColor = this.rgb();
	}

	rgb(){
		return `rgb(${this.r}, ${this.g}, ${this.b})`;
	}

	rgba(a=1.0){
		return `rgba(${this.r}, ${this.g}, ${this.b}, ${a})`;
	}
	
}


const color1 = new Color(255,65,89, 'tomato');
// document.body.style.backgroundColor = color1.rgba(0.8);