let count = 3;
function decrement() {
  if (count > 0) {
    console.log(count);
    count = count - 1;
  } else {
    console.log('Blast off!');
    clearInterval(returnID);
  }
}

const returnID = setInterval(decrement, 1000);
