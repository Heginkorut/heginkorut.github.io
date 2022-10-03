const container = document.querySelector(".container")
const coffees = [
  { name: "silver chain", image: "images/silverchain.jfif" },
  { name: "gold chain", image: "images/goldchain.jfif" },
  { name: "diamond chain", image: "images/diamondchain.jfif" },
  { name: "silver watch", image: "images/silverwatch.jfif" },
  { name: "gold watch", image: "images/goldwatch.jfif" },
  { name: "diamond watch", image: "images/diamondwatch.jfif" },
  { name: "silver ring", image: "images/silverring.jfif" },
  { name: "gold ring", image: "images/goldring.jfif" },
  { name: "diamond ring", image: "images/diamondring.jfif" },
]
const showCoffees = () => {
  let output = ""
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}