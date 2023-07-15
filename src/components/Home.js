const Home = () => {
  const heroSection = document.getElementById("heroContent")
  if (heroSection) {
    heroSection.innerHTML = ""
    let container = document.createElement("div")
    let title = document.createElement("h1")
    title.textContent = "bean"
    container.appendChild(title)
    let subtitle = document.createElement("h2")
    subtitle.textContent = "A holistic approach to your everyday needs."
    container.appendChild(subtitle)
    return heroSection.appendChild(container)
  } else {
    console.log("heroSection doesn't exist")
  }
}

export default Home
