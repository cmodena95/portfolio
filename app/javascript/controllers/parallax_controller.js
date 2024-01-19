import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="parallax"
export default class extends Controller {
  static targets = ["mountain", "tree", "houses", "sun", "swan", "guava", "sushi", "statue", "pizza"]

  connect() {
    this.mountainPos = -80
    this.treePosHorizontal = 0
    this.treePosVertical = 200
    this.housesPosHorizontal = 0
    this.housesPosVertical = 200
    this.sharkPos = 0
    this.sunPos = 125

    this.guavaPos = -19
    this.sushiPos = -39
    this.pizzaPos = 0
    this.statuePos = 21
    this.swanPos = -10

    this.lastScrollTop = 0
  }

  move() {
    this.sunPos = (125 - (window.scrollY) + 2)
    this.sunTarget.style.transform = `translate(-350px, ${this.sunPos}px)`

    this.mountainPos = (((window.scrollY / 13) - 80) - 0.1)
    this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`

    this.treePosHorizontal = (0 - (window.scrollY / 2))
    this.treePosVertical = (200 - (window.scrollY / 10))
    this.treeTarget.style.transform = `translate(${this.treePosHorizontal}px,${this.treePosVertical}px)`

    this.housesPosHorizontal = (0 - (window.scrollY / 2.5))
    this.housesPosVertical = (200 - (window.scrollY / 6))
    this.housesTarget.style.transform = `translate(${this.housesPosHorizontal}px,${this.housesPosVertical}px)`



    // objects
    this.guavaPos = (-19 + (window.scrollY / 20))
    this.guavaTarget.style.transform = `translate(61%, ${this.guavaPos}%)`

    this.sushiPos = (-39 + (window.scrollY / 17))
    this.sushiTarget.style.transform = `translate(1%, ${this.sushiPos}%) rotate(135deg)`

    this.pizzaPos = (window.scrollY / 13)
    this.pizzaTarget.style.transform = `translate(0%, ${this.pizzaPos}%)`

    this.statuePos = (21 + (window.scrollY / 20))
    this.statueTarget.style.transform = `translate(-29%, ${this.statuePos}%)`

    this.swanPos = (-10 + (window.scrollY / 10))
    this.swanTarget.style.transform = `translate(-190%, ${this.swanPos}%) rotate(-15deg)`
  }
}
