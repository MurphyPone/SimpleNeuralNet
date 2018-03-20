class Perceptron { //The Perceptron stores its weights and learning constants.
  constructor(n) { // n = # inputs
    this.weights = []; //initialize weights as an array<float> of size n
    this.numWeights = n;
    this.c = 0.01;

    console.log("#PERCEPTRON INPUTS: " + this.numWeights);


    for(var i = 0; i < this.numWeights; i++) {
      this.weights[i] = random(-1, 1); //fill weights[] with random values between -1, 1
    }
  }

  process(inputs) { //accept input, and delver output "feedForward"
    var sum = 0.0; //a float
    for (var i = 0; i < this.numWeights; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }

  activate(sum) { //like a sigmoid but simpler?
    if(sum > 0) { return 1; }
    else { return -1; }
  }

  train(inputs, goal) { //train based off of known/expected output
    var guess = this.process(inputs);
    var error = goal - guess;

    for (var i = 0; i < this.numWeights; i++) {
      this.weights[i] += this.c * error * inputs[i];  //adjust weights according to error
    }
  }
}
