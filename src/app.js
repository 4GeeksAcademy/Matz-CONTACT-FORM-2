/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  emailjs.init({
    publicKey: "7FpxcV1iqROSRo9wx"
  });

  const button = document.querySelector("#send-info");
  button.addEventListener("click", sendEmails);
};

function sendEmails() {
  const name = document.querySelector("#name-input").value;
  const email = document.querySelector("#email-input").value;
  const message = document.querySelector("#message-input").value;

  emailjs.send("service_qyizc2s", "template_68nimpt", {
    to_name: name,
    to_email: email
  });

  emailjs.send("service_qyizc2s", "template_tiixzwa", {
    from_name: name,
    from_email: email,
    message: message
  });
}
