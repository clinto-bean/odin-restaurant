const About = () => {
  const heroSection = document.getElementById("heroContent")
  if (heroSection) {
    heroSection.innerHTML = ""
    let container = document.createElement("div")
    let title = document.createElement("h1")
    title.textContent = "About Us"
    container.appendChild(title)
    let subtitle = document.createElement("h2")
    subtitle.textContent =
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, libero!"
    container.appendChild(subtitle)
    return heroSection.appendChild(container)
  } else {
    console.log("heroSection doesn't exist")
  }
}

export default About
