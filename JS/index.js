const display = document.querySelector('[data-js="display"]');
const time = new Date().getHours();
const day = new Date().getDay();

function getGreeting() {
  if (time > 6 && time < 12) {
    return "Good Morning";
  } else if (time > 12 && time < 18) {
    return "Good Afternoon";
  } else if (time > 18 && time < 22) {
    return "Good Evening";
  } else if (time > 23 && time < 5) {
    return "Good Night";
  }
}

display.textContent = getGreeting();

const toggleSwitch = document.querySelector(
  '.settings__switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
