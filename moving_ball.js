
window.onload = function () {
	let btn = document.getElementById("jump");
	let btn_clear = document.getElementById('clear')
    let btn_left = document.getElementById('left')
    let btn_right = document.getElementById('right')
	let count = 0;
    


	btn_clear.onclick = function() {
		context.clearRect(0, 0, 400, 200);
	}

	btn.onclick = function (){
		context.clearRect(0, 0, 400, 200);
	 
		count += 1;
		// count is local variable in the first big function
		//when click,  2nd function is being executed
		// count increases 1
		// next click happens, since clik is locally, 
		// it increases 1 again i.e. count = 2
	
		y -= 25;
		// draw a red circle
		context.beginPath();
		context.arc(x, y, 10, 0, 2 * Math.PI);
		context.fillStyle = "red";
		context.fill();

		// write the text
		context.font = "10px Arial";
		context.fillStyle = 'white'
		// the first is to define the string,
		// which is going to write
		// the plus is to combine two strings together.
		context.fillText("Count : " + count, 20, 30);

}
btn_right.onclick = function (){
    context.clearRect(0, 0, 400, 200);
 
    count += 1;
    // count is local variable in the first big function
    //when click,  2nd function is being executed
    // count increases 1
    // next click happens, since clik is locally, 
    // it increases 1 again i.e. count = 2

    x += 25;
    // draw a red circle
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    // write the text
    context.font = "10px Arial";
    context.fillStyle = 'white'
    // the first is to define the string,
    // which is going to write
    // the plus is to combine two strings together.
    context.fillText("Count : " + count, 20, 30);

}


btn_left.onclick = function (){
    context.clearRect(0, 0, 400, 200);
 
    count += 1;
    // count is local variable in the first big function
    //when click,  2nd function is being executed
    // count increases 1
    // next click happens, since clik is locally, 
    // it increases 1 again i.e. count = 2

    x -= 25;
    // draw a red circle
    context.beginPath();
    context.arc(x, y, 10, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.fill();

    // write the text
    context.font = "10px Arial";
    context.fillStyle = 'white'
    // the first is to define the string,
    // which is going to write
    // the plus is to combine two strings together.
    context.fillText("Count : " + count, 20, 30);

}
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var x = 200;
	var y = 180;

    // draw circle
	context.arc(x, y, 10, 0, 2 * Math.PI);
	context.fillStyle = "red";
	context.fill();
    // write text
    context.font = "10px Arial";
    context.fillStyle = 'white'
    // the first is to define the string,
    // which is going to write
    // the plus is to combine two strings together.
    context.fillText("Count : " + count, 20, 30);
}

