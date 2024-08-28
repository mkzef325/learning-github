// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
//  -->

let samay = 0;
const updateCounter = () => {
  samay++;
  console.log(samay + " sec");
  setTimeout(() => {
    updateCounter();
  }, 1000);
};
updateCounter();
