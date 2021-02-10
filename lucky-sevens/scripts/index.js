function play() {
  var total = document.getElementById("starting-bet").value;
  var count = 1;
  var highestAmount = total;
  var highestCount = 0;

  while (total > 0) {
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    if ((die1 + die2) == 7) {
      total = total + 4;
    } else {
      total = total - 1;
    }

    if (total > highestAmount) {
      highestAmount = total;
      highestCount = count;
    }

    count = count + 1;
  }

  if (document.getElementById("starting-bet").value <= 0) {
    alert("Error, Please make the starting bet greater than 0.")
  }
  else {
    document.getElementById("results-table").style.visibility = "visible";
    document.getElementById("starting").innerText = "£"+String(document.getElementById("starting-bet").value)+".00";
    document.getElementById("count").innerText = count;
    document.getElementById("highest-amount").innerText = "£"+String(highestAmount)+".00";
    document.getElementById("highest-count").innerText = highestCount;
  }
}
