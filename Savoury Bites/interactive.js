function getGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning!";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon!";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening!";
  } else {
    greeting = "Hello!";
  }

  return `${greeting} Welcome to Savoury Bites`;
}

  // Display the greeting in an element with id="greeting"
  document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  if (greetingElement) {
    greetingElement.textContent = getGreeting();
  }
  });

//popup reservation confirmation
let popup = document.getElementById('popup');

function openPopup(){
  popup.classList.add('open-popup');
}

function closePopup(){
  popup.classList.remove('open-popup');
}