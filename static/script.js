function addElement(deviceId) {
  var col = document.createElement("div");
  col.className += "col";

  var newDeviceCard = document.createElement("div");
  newDeviceCard.className += "card end_device";

  var cardImage = document.createElement("iframe");
  cardImage.src = "https://thingspeak.com/channels/1472843/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=86400&type=column&update=15&height=170&width=auto&yaxismin=160&yaxismax=190";
  cardImage.width = "100%"
  cardImage.className += "card-img-top"
  cardImage.alt = "...";

  var cardBody = document.createElement("div");
  cardBody.className = "card-body"

  var cardTitle = document.createElement("h5");
  cardTitle.appendChild(document.createTextNode(deviceId));

  var cardText = document.createElement("p");
  cardText.appendChild(document.createTextNode("Text field"));

  var cardBtn = document.createElement("a");
  cardBtn.href = "#";
  cardBtn.className += "btn btn-primary";
  cardBtn.appendChild(document.createTextNode("Go"));

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(cardBtn);
  newDeviceCard.appendChild(cardImage);
  newDeviceCard.appendChild(cardBody);
  col.appendChild(newDeviceCard);




  // var newDiv = document.createElement("div");
  // var newContent = document.createTextNode("Hi there and greetings!");
  // newDiv.appendChild(newContent);
  var currentDiv = document.getElementById("device_corrector");
  // currentDiv.appendChild(newDiv);

  currentDiv.appendChild(col);
}