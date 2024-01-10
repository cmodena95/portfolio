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
    this.statuePos = 41
    this.swanPos = 31

    this.lastScrollTop = 0
  }

  move() {
    // if window.scrollY == 0, put everything back to the beginning
    // OR set limits on how far each element can move (if position is > x...)

    //  number minus window.scrollY

    this.st = window.scrollY || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (this.st > this.lastScrollTop) {
      // banner
      this.sunPos -= 5
      this.sunTarget.style.transform = `translate(-350px, ${this.sunPos}px)`

      this.mountainPos += 0.5
      this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`

      this.treePosHorizontal -= 2.5
      this.treePosVertical -= 2.5
      this.treeTarget.style.transform = `translate(${this.treePosHorizontal}px,${this.treePosVertical}px)`

      this.housesPosHorizontal -= 2.5
      this.housesPosVertical -= 2
      this.housesTarget.style.transform = `translate(${this.housesPosHorizontal}px,${this.housesPosVertical}px)`

      // objects
      this.guavaPos += 0.5
      this.guavaTarget.style.transform = `translate(61%, ${this.guavaPos}%)`

      this.sushiPos += 0.75
      this.sushiTarget.style.transform = `translate(1%, ${this.sushiPos}%) rotate(135deg)`

      this.pizzaPos += 0.75
      this.pizzaTarget.style.transform = `translate(0%, ${this.pizzaPos}%)`

      this.statuePos += 0.25
      this.statueTarget.style.transform = `translate(-29%, ${this.statuePos}%)`

      this.swanPos += 0.5
      if (this.swanPos <= 59) {
        this.swanTarget.style.transform = `translate(81%, ${this.swanPos}%) rotate(-15deg)`
      }
    } else if (this.st < this.lastScrollTop) {
      this.sunPos += 5
      this.sunTarget.style.transform = `translate(-350px,${this.sunPos}px)`
      

      this.mountainPos -= 0.5
      this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`

      this.mountainPos -= window.scrollY / 1200
      this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`

      this.treePosHorizontal += 2.5
      this.treePosVertical += 2.5
      this.treeTarget.style.transform = `translate(${this.treePosHorizontal}px,${this.treePosVertical}px)`

      this.housesPosHorizontal += 2.5
      this.housesPosVertical += 2
      this.housesTarget.style.transform = `translate(${this.housesPosHorizontal}px,${this.housesPosVertical}px)`

      
      // objects
      this.guavaPos -= 0.5
      this.guavaTarget.style.transform = `translate(61%, ${this.guavaPos}%)`

      this.sushiPos -= 0.75
      this.sushiTarget.style.transform = `translate(1%, ${this.sushiPos}%) rotate(135deg)`

      this.pizzaPos -= 0.75
      this.pizzaTarget.style.transform = `translate(0%, ${this.pizzaPos}%)`

      this.statuePos -= 0.25
      this.statueTarget.style.transform = `translate(-29%, ${this.statuePos}%)`

      this.swanPos -= 0.5
      this.swanTarget.style.transform = `translate(81%, ${this.swanPos}%) rotate(-15deg)`
    } 
    this.lastScrollTop = this.st <= 0 ? 0 : this.st;
  }
}
