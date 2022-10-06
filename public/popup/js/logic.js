let popup = document.querySelector(".envolturaPopup");
let btn = document.querySelector("button");
let popupClose = document.querySelector(".popupClose");

btn.addEventListener("click", display);

//  display the modal after 3 second of page load



function display() {
  popup.style.display = "block";
}

//  when the user clicks on X button,close the popup
popupClose.addEventListener("click", hide);

/* // when user clicks anywhere outside the popup, close popup
window.addEventListener("click", (event) => {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}); */

function hide() {
  popup.style.display = "none";
}