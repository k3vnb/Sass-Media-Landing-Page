
// this runs the loading icon
var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})
// end of loading icon
function showWalrus(){
  alert("hello");
}
const walrusLink = document.querySelector(".walrus-link");


walrusLink.addEventListener("click", showWalrus, false);
