const navLinks = ["home", "about", "menu"]
const content = document.getElementById("content")

const NavBar = () => {
  const navigation = document.createElement("nav")
  navigation.setAttribute("id", "nav")

  const logo = document.createElement("div")
  const logoImg = document.createElement("img")
  logoImg.setAttribute("src", "../src/images/bean.svg")
  logoImg.setAttribute("alt", "Clint's Cup")
  logoImg.classList.add("invert")
  const logoText = document.createElement("p")
  logoText.textContent = "bean."
  logoText.classList.add("navHead")
  logo.setAttribute("id", "logo")
  logo.appendChild(logoImg)
  logo.appendChild(logoText)

  const search = document.createElement("form")
  search.setAttribute("id", "searchform")
  let searchField = document.createElement("input")
  searchField.setAttribute("action", "#")
  searchField.setAttribute("placeholder", "Search...")
  search.appendChild(searchField)
  let searchBtn = document.createElement("button")
  searchBtn.setAttribute("type", "submit")
  searchBtn.setAttribute("id", "navSearch")
  search.appendChild(searchBtn)

  const navList = document.createElement("ul")
  navList.setAttribute("id", "navlist")
  navLinks.forEach((link) => {
    const navItem = document.createElement("li")
    const navLink = document.createElement("a")
    navLink.setAttribute("id", link)
    navItem.appendChild(navLink)
    navLink.textContent = link
    navList.appendChild(navItem)
  })
  navigation.appendChild(search)
  navigation.appendChild(logo)
  navigation.appendChild(navList)
  return content.appendChild(navigation)
}

export default NavBar
