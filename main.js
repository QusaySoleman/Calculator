let displayScreen = document.getElementById("display-screen");
let buttons = document.getElementsByClassName("btn");
let equal = document.getElementById("equal-btn");
let clear = document.getElementById("clear-btn");
let delet = document.getElementById("del-btn");
//convert buttons to array
let buttonsArray = Array.from(buttons);
buttonsArray.map((x) => {
  x.addEventListener("click", function (e) {
    e.target.dataset.num;
    displayScreen.value += e.target.dataset.num;
    // equal btn
    equal.onclick = function evaluation() {
      if (displayScreen.value != "") {
        let result = eval(displayScreen.value);
        displayScreen.value = result;
      } else {
        displayScreen.value = "Empty Values";
        setTimeout(() => {
          displayScreen.value = "";
        }, 1000);
      }
    };
    //clear btn
    clear.onclick = function clear() {
      displayScreen.value = "";
    };
    //delete last number btn
    delet.onclick = function del() {
      displayScreen.value = displayScreen.value.slice(0, -1);
    };
  });
});
