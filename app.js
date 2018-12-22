var toggleList = document.getElementById("toggleList");
var listdiv = document.querySelector('.list');
var descriptionInput = document.querySelector("input.description");
var apple = document.getElementById("apple");
var descriptionButton = document.querySelector("button.description");
var addItemInput = document.querySelector("input.addItemInput")
var addItemButton = document.querySelector("button.addItemButton")
var removeItemButton = document.querySelector("button.removeItemButton")
// const listItems = document.getElementsByTagName('li');

listdiv.addEventListener("mouseover", (event) => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});

listdiv.addEventListener("mouseout", () => {
  if (event.target.tagName == "LI") {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});




toggleList.addEventListener("click", () => {
  if (listdiv.style.display == "none") {
    listdiv.style.display = 'block';
    toggleList.innerHTML = "Hide List";

  } else {
    listdiv.style.display = 'none';
    toggleList.innerHTML = "Show list";
  }
});
descriptionButton.addEventListener("click", () => {
  apple.textContent = descriptionInput.value;
  descriptionInput.value = "";

});

addItemButton.addEventListener("click", () => {
  var ul = document.getElementsByTagName("ul")[0];
  var li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
});

removeItemButton.addEventListener("click", () => {
  var ul = document.getElementsByTagName("ul")[0];
  var li = document.querySelector('li:last-child');
  ul.removeChild(li);

});





