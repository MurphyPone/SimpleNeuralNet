//Concepts from: http://natureofcode.com/book/chapter-10-neural-networks/
//JavaScript adaptation of the Processing Neural Net by Daniel Shiffman

//TODO Make a smaller, dynamic canvas

var ptron; //our node
var trainers = []; //Declate our array withroom for 2000 trainig points
var count = 0;
var width, height; //dimensions of canvas

function f(x) { //return float?
	return 2.0 * x + 1.0; //simple problem for the Perceptron to solve
}

function setup() {
	width = 800;
	height = 600
	createCanvas(width, height);
	ptron = new Perceptron(3); //initialize our Perceptron with 3 inputs

	for (var i = 0; i < 2000; i++) {
    var x = random(-width/2,width/2); //floats
    var y = random(-height/2,height/2);
    var answer = 1;

    if (y < f(x)) { answer = -1; }
    trainers[i] = new Trainer(x, y, answer);
  }
}

function draw() {
	background(51);
	translate(width/2,height/2);  //translate to center of screen

	ptron.train(trainers[count].inputs, trainers[count].answer);
	count = (count + 1) % trainers.length;

	for (var i = 0; i < count; i++) {
		stroke(0);
	  var guess = ptron.process(trainers[i].inputs);
    if (guess > 0) fill(0, 200, 0);
    else           fill(200, 0, 0);
    ellipse(trainers[i].inputs[0], trainers[i].inputs[1], 8, 8);
  }
}
