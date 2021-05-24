function changeText(id) {
  id.innerHTML = "Yes, show me more!";
}

function mouseOverTxt(obj) {
  obj.innerHTML = "Yes, show me more!"
}

function mouseOutTxt(obj) {
  obj.innerHTML = "Want to see more?"
}

function mouseOverStyle(obj) {
  obj.style["background-color"] = "rgb(199, 164, 139, 0.5)"
}

function mouseOutStyle(obj) {
  obj.style["color"]= "grey";
	obj.style["background-color"] = "inherit";
}

function detectInactivity() {
  var timer;
  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer; 
  window.onclick = resetTimer;     
  window.onscroll = resetTimer;    
  window.onkeypress = resetTimer;  

 function mess() {
    var d = new Date();
    alert("Are you still there?\n" + "Now it's " + d.getHours() + " and " + d.getMinutes() + " minutes, so get going!");
 }

 function resetTimer() {
      clearTimeout(timer);
      timer = setTimeout(mess, 60000); //or setInterval
  }

}
detectInactivity();


var obj = document.getElementById('id1');

function getRandomColor() {
  var color = '#';
  var letters = '0123456789ABCDEF';
  for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  obj.setAttribute("style","color: " + getRandomColor() + ";");
}

function stylize() {
    setRandomColor();
}

stylize();

document.addEventListener("keydown", function(event) {
  switch (event.which) {
    case 8:
      window.open("contact.html", target="_self");
      break;
  }
})
