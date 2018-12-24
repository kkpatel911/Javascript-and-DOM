var toggleList = document.getElementById("toggleList");
var listdiv = document.querySelector('.list');
var descriptionInput = document.querySelector("input.description");
var apple = document.getElementById("apple");
var listul = listdiv.querySelector('ul');
var descriptionButton = document.querySelector("button.description");
var addItemInput = document.querySelector("input.addItemInput")
var addItemButton = document.querySelector("button.addItemButton")

// const listItems = document.getElementsByTagName('li');

listul.addEventListener("click", (event) => {
  if (event.target.tagName == "BUTTON") {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
      clas
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
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





