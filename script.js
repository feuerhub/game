var colors = [
  "green",
  "blue",
  "red",
  "yellow",
  "pink",
  "green",
  "blue",
  "red",
  "yellow",
  "pink",
];
var count = 0;
var previd = null;
var tries = 0;
var n = 0;
function startGame() {
  colors.sort(function () {
    return Math.random() - 0.5;
  });
  count = 0;
  tries = 0;
  n = 0;
  document.getElementById("score-number").innerHTML = tries.toString();
  for (i = 0; i < 10; i++) {
    document.getElementById(i.toString()).style.display = "block";
    document.getElementById(i.toString()).innerHTML = "";
    document.getElementById(i.toString()).disabled = false;
    document.getElementById(i.toString()).style.background =
      "rgba(0, 0, 0, 0.8)";
  }
}
function openCard(thisid) {
  if (thisid != previd || count == 0) {
    tries++;
    document.getElementById("score-number").innerHTML = tries.toString();
    document.getElementById(thisid.toString()).style.background =
      colors[thisid];
    if (count == 0) {
      previd = thisid;
      count++;
    } else {
      setTimeout(additional, 500, thisid);
    }
  }
}
function additional(thisid) {
  if (colors[thisid] == colors[previd]) {
    document.getElementById(thisid.toString()).style.background =
      "rgba(0, 0, 0, 0.3)";
    document.getElementById(previd.toString()).style.background =
      "rgba(0, 0, 0, 0.3)";
    document.getElementById(thisid.toString()).disabled = true;
    document.getElementById(previd.toString()).disabled = true;
    n++;
    if (n == 5) {
      let winner = " YOU  WON ";
      for (i = 0; i < 10; i++) {
        document.getElementById(i.toString()).innerHTML = winner[i];
      }
    }
  } else {
    document.getElementById(thisid.toString()).style.background =
      "rgba(0, 0, 0, 0.8)";
    document.getElementById(previd.toString()).style.background =
      "rgba(0, 0, 0, 0.8)";
  }
  count = 0;
}
