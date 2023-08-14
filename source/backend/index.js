const flap = new Map().set("i", 0);
let list = document.getElementsByTagName("LI"),
  i;

// add cross

for (i = 0; i < list.length; i++) {
  let span = document.createElement("SPAN"),
    text = document.createTextNode("    ❌");
  span.className = "close";
  span.appendChild(text);
  list[i].appendChild(span);
}

// close item

var close = document.getElementsByClassName("close"),
  i2;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add task to list

function addTask() {
  let ruleDescription = document.getElementById("addInput"),
    createLi = document.createElement("li"),
    t = document.createTextNode(
      `task ${flap.get("i") + 1} - ${ruleDescription.value}`
    );

  createLi.appendChild(t);

  if (ruleDescription.value === "")
    return alert("⚠ You must append a task description.");
  else document.getElementById("sul").appendChild(createLi);
  document.getElementById("addInput").value = "";
  flap.set("i", flap.get("i") + 1);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("    ❌");
  span.className = "close";
  span.appendChild(txt);
  createLi.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// reset list

function reset() {
  document.getElementById("sul").innerHTML = "";
  flap.set("i", 0);
}
