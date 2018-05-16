
// this runs the loading icon
var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})
// end of loading icon
function showWalrus(e){
  e.preventDefault();
  let showTheWalrus = document.querySelector(".walrus-div");
  showTheWalrus.style.display = "flex";
}
function hideWalrus(){
  let hideTheWalrus = document.querySelector(".walrus-div");
  hideTheWalrus.style.display = "none";
}
const walrusLink = document.querySelector(".walrus-link");
const walrusDiv = document.querySelector(".walrus-div");


walrusLink.addEventListener("click", showWalrus);
walrusDiv.addEventListener("click", hideWalrus);
