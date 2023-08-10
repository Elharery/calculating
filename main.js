let btn = document.getElementById("btn");
let parent = document.querySelector(".parent");
let result = document.getElementById("result");
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let opret = document.querySelectorAll(".opretors");
let opretPlus = document.getElementById("plus");
let opretX = document.getElementById("x");
let opretMins = document.getElementById("mins");
let opretDevinition = document.getElementById("on");

opret.forEach((e) => {
  e.addEventListener("click", (e) => {
    opret.forEach((e) => {
      e.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});
num2.oninput = () => {
  if (!num1.value) {
    opretPlus.classList.add("not");
    opretX.classList.add("not");
    opretMins.classList.add("not");
    opretDevinition.classList.add("not");
  } else {
    opretPlus.classList.remove("not");
    opretX.classList.remove("not");
    opretMins.classList.remove("not");
    opretDevinition.classList.remove("not");
  }
};
if (!num1.value) {
  opretPlus.classList.add("not");
  opretX.classList.add("not");
  opretMins.classList.add("not");
  opretDevinition.classList.add("not");
}
//
function plus() {
  result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
}
function mins() {
  result.innerHTML = parseInt(num1.value) - parseInt(num2.value);
}

function x() {
  result.innerHTML = parseInt(num1.value) * parseInt(num2.value);
}
function devinition() {
  result.innerHTML = ` ${(parseInt(num1.value) / parseInt(num2.value)).toFixed(2)}`;
}
opretX.onclick = () => {
  x();
};
opretDevinition.onclick = () => {
  devinition();
};
opretPlus.onclick = () => {
  // label.style.display = "flex";
  plus();
};
opretMins.onclick = () => {
  mins();
};
function clear() {
  label.style.display = "none";
  result.textContent = "Wrong Opertion"
}
function wrongOepertion() {
  result.textContent = "Wrong Opertion"
}
btn.addEventListener("click", () => {
  if (num1.value && num2.value) {
    opret.forEach((e) => {
      e.classList.remove("active");
    });
    setTimeout(clear, 2000);
    label.style.display = "flex";
    opretPlus.classList.add("not");
    opretX.classList.add("not");
    opretMins.classList.add("not");
    opretDevinition.classList.add("not");
    num1.value = "";
    num2.value = "";
  }
});

