/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    random(who) + " " + random(action) + " " + random(what) + " " + random(when)
  );
};
