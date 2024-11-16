function createEarth() {
    let earth = document.createElement("img")
    earth.id = "earth"
    let url = "images/earth.gif"
    earth.setAttribute("src", url)
    document.body.appendChild(earth)
}

function createSun() {
    let sun = document.createElement("img")
    sun.id = "sun"
    let url = "images/sun.png"
    sun.setAttribute("src", url)
    document.body.appendChild(sun)
}

function createMeteor() {
    let meteor = document.createElement("img")
    meteor.id = "meteor"
    let url = "images/meteor.gif"
    meteor.setAttribute("src", url)
    document.body.appendChild(meteor)
}

function createPlanet() {
    let planet = document.createElement("img")
    planet.id = "planet"
    let url = "images/planet.gif"
    planet.setAttribute("src", url)
    document.body.appendChild(planet)
}

function createGalaxy() {
    let galaxy = document.createElement("img")
    galaxy.id = "galaxy"
    let url = "images/galaxy3.gif"
    galaxy.setAttribute("src", url)
    document.body.appendChild(galaxy)
}

createEarth();
createSun();
createMeteor();
createPlanet();
createGalaxy();
setInterval(createMeteor,10000);