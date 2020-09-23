//Favorite Icon
let favIcons = Array.from(document.getElementsByClassName("fa-heart"));
for (let fav of favIcons) {
  fav.addEventListener("click", function () {
    if (fav.style.color == "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}
//Delete Icon
let delIcons = Array.from(document.getElementsByClassName("fa-ban"));
for (let del of delIcons) {
  del.addEventListener("click", function () {
    del.parentNode.remove();
    sumTot();
  });
}
//Add Button
let addBtns = Array.from(document.getElementsByClassName("Icon--plus"));
for (let btn of addBtns) {
  btn.addEventListener("click", function () {
    btn.previousElementSibling.value++;
    sumTot();
  });
}
//Substraction Button
let minusBtns = Array.from(document.getElementsByClassName("Icon--minus"));
for (let btn of minusBtns) {
  btn.addEventListener("click", function () {
    if (btn.nextElementSibling.value > 0) {
      btn.nextElementSibling.value--;
      sumTot();
    }
  });
}

function sumTot() {
  var qte = Array.from(
    document.getElementsByClassName("QuantitySelector__CurrentQuantity")
  );
  var price = Array.from(document.getElementsByClassName("price"));
  var summ = 0;
  for (var i = 0; i < qte.length; i++) {
    summ += qte[i].value * price[i].innerHTML;
  }
  document.getElementById("total").innerHTML = summ + "$";
}
