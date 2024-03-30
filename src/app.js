/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  emailjs.init({
    publicKey: "7FpxcV1iqROSRo9wx",
  });

  const button = document.querySelector("#send-info");
  button.addEventListener("click", sendEmails);
};

function sendEmails() {
  alert("sending emails");
}
