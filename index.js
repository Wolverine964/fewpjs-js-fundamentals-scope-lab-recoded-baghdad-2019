var animal = "cat";

function myAnimal() {
  var animal = "dog"
  return myAnimal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAnimal;
}
var two = 2;
function add2(n) {
  return n + two;

  // Feel free to move things around!
  
}