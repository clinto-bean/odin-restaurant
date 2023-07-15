const content = document.getElementById("content")

const Hero = () => {
  const myHero = document.createElement("section")
  myHero.setAttribute("id", "hero")
  const heroContainer = document.createElement("div")
  heroContainer.setAttribute("id", "heroContent")
  myHero.appendChild(heroContainer)
  return content.appendChild(myHero)
}

export default Hero
