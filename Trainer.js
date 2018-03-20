class Trainer { //The Perceptron stores its weights and learning constants.
  constructor(x, y, a ) { // xPos, yPos, answer
    this.inputs = [];  // initialize inputs as a float[] of size 3
    this.inputs[0] = x;
    this.inputs[1] = y;
    this.inputs[2] = 1; //built in bias
    this.answer = a;
  }
}
