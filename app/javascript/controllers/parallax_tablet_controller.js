import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="parallax-tablet"
export default class extends Controller {
  static targets = ["mountain", "tree", "houses", "sun", "swan", "guava", "sushi", "statue", "pizza", "header"]

  move() {
    this.sunPos = (-98 - (window.scrollY) + 2)
    this.sunTarget.style.transform = `translate(0, ${this.sunPos}px)`

    this.mountainPos = (((window.scrollY / 13) - 400) - 0.1)
    this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`

    this.treePosHorizontal = (0 - (window.scrollY / 10))
    this.treePosVertical = (100 - (window.scrollY / 7))
    this.treeTarget.style.transform = `translate(${this.treePosHorizontal}px,${this.treePosVertical}px)`

    this.housesPosHorizontal = (0 - (window.scrollY / 4))
    this.housesPosVertical = (100 - (window.scrollY / 8))
    this.housesTarget.style.transform = `translate(${this.housesPosHorizontal}px,${this.housesPosVertical}px)`

    // header
    this.headerWidth = (80 - (window.scrollY / 30))
    this.headerHeight = (33 - (window.scrollY / 30))

    this.headerTarget.style.width = `${this.headerWidth}vw`
    this.headerTarget.style.height = `${this.headerHeight}vh`


    // objects
    this.pizzaPos = -100 + (window.scrollY / 15)
    this.pizzaTarget.style.transform = `translate(0px,${this.pizzaPos}px)`

    this.guavaPos = (0 + (window.scrollY / 25))
    this.guavaTarget.style.transform = `translate(0px, ${this.guavaPos}px)`

    this.statuePos = (0 + (window.scrollY / 15))
    this.statueTarget.style.transform = `translate(0px, ${this.statuePos}px)`

    this.swanPos = (-100 + (window.scrollY / 35))
    this.swanTarget.style.transform = `translate(0px, ${this.swanPos}px)`

    this.sushiPos = (-50 + (window.scrollY / 25))
    this.sushiTarget.style.transform = `translate(0px, ${this.sushiPos}px)`
  }
}
