let todoList = [];
function mencari() {
  let inputValue = document.getElementById("cari").value;
  let arrayFilter = [];
  for (let i = 0; i < todoList.length; i++) {
    let dataFilter = todoList[i].includes(inputValue);
    if (dataFilter == true) arrayFilter.push(todoList[i]);
  }

  renderList(arrayFilter);
}

function renderList(data) {
  let ulKosongan = document.getElementById("myUL");
  ulKosongan.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let span = document.createElement("span");
    let liKosongan = document.createElement("li");
    let txt = document.createTextNode("\u00d7");
    liKosongan.textContent = data[i];
    ulKosongan.appendChild(liKosongan);
    liKosongan.appendChild(span);
    span.className = "close";
    span.appendChild(txt);

    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        todoList.splice(i, 1);
        renderList(todoList);
      };
    }
  }
}

let myNodeList = document.getElementsByTagName("li");
for (let i = 0; i < myNodeList.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00d7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}
let list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    console.log("clicked");
    console.log(ev.target.tagName);
    if (ev.target.tagName == "LI") {
      ev.target.classList.toggle("centang");
    }
  },
  false
);

function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue == "") alert("Kamu Harus Menulis Sesuatu");
  else {
    todoList.push(inputValue);
    renderList(todoList);
    document.getElementById("myInput").value = "";
  }
}
