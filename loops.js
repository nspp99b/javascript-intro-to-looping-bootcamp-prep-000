//TO DO - for loop exercise
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    if (i === 0) {
      array.push(`I am ${i} strange loop`);
    }
    else {
      array.push(`I am ${i} strange loops`);
    }
  }
  return array
}
//TO DO - while loop exercise
function whileLoop(n) {
  while(n > 0) {
    console.log(n--)
  }
  return ("done")
}
//TO DO - do while loop exercise

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array) {
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue());
  return array
}
