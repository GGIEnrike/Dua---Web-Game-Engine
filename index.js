// Import stylesheets
import './style.css';

function hello()
{
  console.log("hello")
}

var but = document.getElementById("button")
but.addEventListener("click", hello)