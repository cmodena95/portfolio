import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="parallax"
export default class extends Controller {
  static targets = ["mountain", "tree", "houses", "sun", "swan", "guava", "sushi", "statue", "pizza", "header"]

  connect() {
    // this.mountainPos = -80
    // this.treePosHorizontal = 0
    // this.treePosVertical = 200
    // this.housesPosHorizontal = 0
    // this.housesPosVertical = 200
    // this.sunPos = 50

    // this.guavaPos = -19
    // this.sushiPos = -39
    // this.pizzaPos = 0
    // this.statuePos = 21
    // this.swanPos = -10

    // this.lastScrollTop = 0
  }

  move() {
    if (window.screen.availWidth <= 1024) {
      this.sunPos = (0 - (window.scrollY) + 2)
      this.mountainPos = (((window.scrollY / 13) - 400) - 0.1)
      this.treePosHorizontal = (0 - (window.scrollY / 10))
      this.treePosVertical = (100 - (window.scrollY / 7))
      this.housesPosHorizontal = (0 - (window.scrollY / 4))
      this.housesPosVertical = (100 - (window.scrollY / 8))
      this.headerWidth = (80 - (window.scrollY / 30))
      this.headerHeight = (33 - (window.scrollY / 30))

      this.sunVert = -80

      this.guavaPos = (0 + (window.scrollY / 45))
      this.sushiPos = (-80 + (window.scrollY / 55))
      this.pizzaPos = -70 + (window.scrollY / 35)
      this.statuePos = (0 + (window.scrollY / 55))
      this.swanPos = (-100 + (window.scrollY / 35))
    } else {
      this.sunPos = (50 - (window.scrollY) + 2)
      this.mountainPos = (((window.scrollY / 13) - 80) - 0.1)
      this.treePosHorizontal = (0 - (window.scrollY / 2))
      this.treePosVertical = (200 - (window.scrollY / 10))
      this.housesPosHorizontal = (0 - (window.scrollY / 2.5))
      this.housesPosVertical = (200 - (window.scrollY / 6))
      this.headerWidth = (60 - (window.scrollY / 30))
      this.headerHeight = (52 - (window.scrollY / 30))

      this.sunVert = -350

      this.guavaPos = (-19 + (window.scrollY / 20))
      this.sushiPos = (-39 + (window.scrollY / 17))
      this.pizzaPos = (window.scrollY / 13)
      this.statuePos = (21 + (window.scrollY / 20))
      this.swanPos = (-10 + (window.scrollY / 10))
    }

    if (window.screen.availWidth >= 1900) {
      this.sunVert = -530
    }
    
    this.sunTarget.style.transform = `translate(${this.sunVert}px, ${this.sunPos}px)`
    this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`
    this.treeTarget.style.transform = `translate(${this.treePosHorizontal}px,${this.treePosVertical}px)`
    this.housesTarget.style.transform = `translate(${this.housesPosHorizontal}px,${this.housesPosVertical}px)`

    // header
    this.headerTarget.style.width = `${this.headerWidth}vw`
    this.headerTarget.style.height = `${this.headerHeight}vh`

    // objects
    this.guavaTarget.style.transform = `translate(${window.screen.availWidth <= 1024 ? "0" : "61%"}, ${this.guavaPos}%)`
    this.sushiTarget.style.transform = `translate(${window.screen.availWidth <= 1024 ? "0" : "1%"}, ${this.sushiPos}%) rotate(135deg)`
    this.pizzaTarget.style.transform = `translate(0%, ${this.pizzaPos}%)`
    this.statueTarget.style.transform = `translate(${window.screen.availWidth <= 1024 ? "0" : "-29%"}, ${this.statuePos}%)`
    this.swanTarget.style.transform = `translate(${window.screen.availWidth <= 1024 ? "0" : "-190%"}, ${this.swanPos}%) rotate(-15deg)`
  }
}
