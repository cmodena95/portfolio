import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="parallax-mobile"
export default class extends Controller {
  static targets = ["mountain", "tree", "houses", "sun", "header"]

  connect() {
    // this.mountainPos = 0
    this.treePosHorizontal = -10
    this.treePosVertical = 20
    this.housesPosHorizontal = -100
    this.housesPosVertical = 60
    this.sunPos = 0
  }

  move() {
    this.treePosHorizontal = (-10 - (window.scrollY / 15))
    this.treePosVertical = (20 - (window.scrollY / 20))
    this.treeTarget.style.transform = `translate(${this.treePosHorizontal}px,${this.treePosVertical}px)`

    this.housesPosHorizontal = (-100 - (window.scrollY / 15))
    this.housesPosVertical = (60 - (window.scrollY / 35))
    this.housesTarget.style.transform = `translate(${this.housesPosHorizontal}px,${this.housesPosVertical}px)`
  
    // this.mountainPos = ((window.scrollY / 20) - 0.1)
    // this.mountainTarget.style.transform = `translate(${this.mountainPos}px,0)`
    
    this.sunPos = window.scrollY + 20
    this.sunTarget.style.transform = `translate(0px, -${this.sunPos}px)`

    this.headerWidth = (90 - (window.scrollY / 20))
    this.headerHeight = (22 - (window.scrollY / 40))
    this.headerTarget.style.width = `${this.headerWidth}vw`
    this.headerTarget.style.height = `${this.headerHeight}vh`
  }
}
