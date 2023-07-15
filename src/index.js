import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Home from "./components/Home"
import About from "./components/About"
import Menu from "./components/Menu"

NavBar()

Hero()

const navButtons = [
  document.getElementById("home"),
  document.getElementById("about"),
  document.getElementById("menu"),
]

navButtons.forEach((navLink) => {
  let navText = navLink.textContent
  let firstLetter = navText.slice(0, 1)
  let remainingLetters = navText.slice(1)
  const result = () => {
    // Define the action for each navigation button here
    if (navLink.id === "home") {
      Home()
    } else if (navLink.id === "about") {
      About()
    } else if (navLink.id === "menu") {
      Menu()
    }
  }

  navLink.addEventListener("click", result)
})
