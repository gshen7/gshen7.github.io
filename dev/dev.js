PICTURES = ["0.png", "1.png", "2.png"];

var index = -1;

function displayNext(id) {
  index++;
  if (index >= PICTURES.length) {
    index = 0;
  }
  var album = document.getElementById(id);
  album.src = getPicture(index);
}

function displayHint(id) {
  var album = document.getElementById(id);
  album.innerHTML = "Next";
}

function getPicture(idx) {
  return PICTURES[idx];
}

$(window).on("load", function() {
  displayNext("ex");
});
