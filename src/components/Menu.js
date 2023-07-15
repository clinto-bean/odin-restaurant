const Menu = () => {
  const heroSection = document.getElementById("heroContent")
  const drinks = [
    { name: "Espresso (single)", cost: "$1.75" },
    { name: "Doppio", cost: "$2.75" },
    { name: "Cafe Latte", cost: "$4.00" },
    { name: "Cappuccino", cost: "$3.50" },
    { name: "Pour Over (Single Origin)", cost: "Market Price" },
  ]
  if (heroSection) {
    heroSection.innerHTML = ""
    let container = document.createElement("div")
    let menuList = document.createElement("ul")
    menuList.setAttribute("id", "menuList")
    menuList.style.listStyle = "none"
    drinks.forEach((drink) => {
      let menuItem = document.createElement("li")
      menuItem.textContent = drink.name
      let menuPrice = document.createElement("p")
      menuPrice.textContent = drink.cost
      menuItem.appendChild(menuPrice)
      menuItem.style.color = "var(--darkbrown)"
      menuPrice.style.color = "black"
      menuPrice.style.fontWeight = "700"
      menuItem.style.display = "flex"
      menuItem.style.justifyContent = "space-between"
      menuItem.style.gap = "2rem"
      menuList.appendChild(menuItem)
    })
    container.appendChild(menuList)
    return heroSection.appendChild(container)
  } else {
    console.log("cannot find herosection")
  }
}

export default Menu
