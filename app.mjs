function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  let inputElement = document.querySelector("#telephone");
  inputElement.addEventListener("input", validateNumber)

  let spanElement = document.querySelector(".display");

  let btnElement = document.querySelector("#btn");

  let form = document.querySelector("#formy");


  function validateNumber() {
    let inputValue = inputElement.value;
    let string_length = inputValue.length;
    let firstFourNum = inputValue.slice(0, 4)
    let zeroFirst = inputValue.slice(0, 1)
    var numbers = /^[+0-9]+$/;

    if (inputValue.match(numbers)) {
      if (zeroFirst == 0 && string_length == 11) {
        var prefix = Number(inputValue.slice(1, 4));

      }
      else if (zeroFirst !== 0 && string_length == 10) {
        prefix = Number(inputValue.slice(0, 3));
      }
      else if (firstFourNum == "+234" && string_length == 14) {
        prefix = Number(inputValue.slice(4, 7));
      }

      let MTN = [803, 806, 703, 706, 813, 816, 810, 814, 903, 906]
      let airtel = [802, 808, 708, 812, 701, 704, 902, 904, 901]
      let GLO = [805, 807, 705, 815, 811, 905]
      let _9mobile = [809, 818, 817, 909, 908]


      if (MTN.includes(prefix)) {
        const img = document.createElement("img")
        img.src = "mtn.png"
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center"
        spanElement.replaceChildren(img);
      }
      else if (airtel.includes(prefix)) {
        const img = document.createElement("img")
        img.src = "airtel.png"
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center"
        spanElement.replaceChildren(img);
      }
      else if (GLO.includes(prefix)) {
        const img = document.createElement("img")
        img.src = "glo.png"
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center"
        spanElement.replaceChildren(img);
      }
      else if (_9mobile.includes(prefix)) {
        const img = document.createElement("img")
        img.src = "9mobile.png"
        img.height = 50;
        img.width = 40;
        img.style.alignSelf = "center"
        spanElement.replaceChildren(img);
      }
      else {
        spanElement.innerHTML = "Unknown number";
      }
      let allNetwork = MTN.concat(airtel, GLO, _9mobile);
      let sortedNetworks = allNetwork.sort();
    }
    else {
      spanElement.innerHTML = "Input numbers only";
    }
  }


  btnElement.addEventListener("click", () => {
    spanElement.innerHTML = "";
  })

};

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //