function addElement (createId) {
    var newDiv = document.createElement("div");
    newDiv.id = newDiv.id + createId
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent);
    var currentDiv = document.getElementById("device_corrector");
    currentDiv.appendChild(newDiv);
  }