const toggleOpen = document.getElementById("toggleOpen");
const toggleClose = document.getElementById("toggleClose");
const navigation = document.getElementById("navigation");
const hidden1 = document.getElementById("hidden1");
const hidden2 = document.getElementById("hidden2");
const hidden3 = document.getElementById("hidden3");
const hidden4 = document.getElementById("hidden4");
const justify = document.getElementById("justify");

toggleOpen.addEventListener("click", () => {
  //   hide toggleOpen
  toggleOpen.classList.toggle("hidden");
  hidden1.classList.toggle("hidden");
  hidden2.classList.toggle("hidden");
  hidden3.classList.toggle("hidden");
  hidden4.classList.toggle("hidden");
  //   show toggleCLose
  toggleClose.classList.toggle("hidden");
  justify.classList.toggle("justify-end");
  justify.classList.toggle("justify-between");
  //   show navigation
  navigation.classList.toggle("hidden");
});

toggleClose.addEventListener("click", () => {
  // hide toggle close
  toggleClose.classList.toggle("hidden");
  // show toggle open
  toggleOpen.classList.toggle("hidden");
  hidden1.classList.toggle("hidden");
  hidden2.classList.toggle("hidden");
  hidden3.classList.toggle("hidden");
  hidden4.classList.toggle("hidden");
  // hide nav
  navigation.classList.toggle("hidden");
  justify.classList.toggle("justify-end");
  justify.classList.toggle("justify-between");
});
