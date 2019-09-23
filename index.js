var animal = "cat"

function myAnimal() {
  return animal
}

var animal2="dog"
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal2
}
var myAnimal=yourAnimal;
var two = 2
function add2(n) {
  return n + two

  // Feel free to move things around!
  
}