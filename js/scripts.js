
// this runs the loading icon
var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})
// end of loading icon
function showWalrus(){
  let showTheWalrus = document.querySelector(".walrus-div");
  showTheWalrus.style.display = "flex";
}
const walrusLink = document.querySelector(".walrus-link");


walrusLink.addEventListener("click", showWalrus);
