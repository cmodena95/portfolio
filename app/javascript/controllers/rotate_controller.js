import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="rotate"
export default class extends Controller {
  static targets = ["sushi", "swan", "pizza", "statue", "guava"]

  connect() {
    this.sushiDeg = window.scrollY / 20
    this.sushiTarget.style.transform = `rotate(${this.sushiDeg}deg)`

    this.swanDeg = window.scrollY / 100
    this.swanTarget.style.transform = `rotate(-${this.swanDeg}deg)`

    this.pizzaDeg = window.scrollY / 60
    this.pizzaTarget.style.transform = `rotate(-${this.pizzaDeg}deg)`

    this.statueDeg = window.scrollY / 70
    this.statueTarget.style.transform = `rotate(${this.statueDeg}deg)`

    this.guavaDeg = window.scrollY / 20
    this.guavaTarget.style.transform = `rotate(-${this.guavaDeg}deg)`
  }

  transform() {
    this.sushiDeg = window.scrollY / 20
    this.sushiTarget.style.transform = `rotate(${this.sushiDeg}deg)`

    this.swanDeg = window.scrollY / 100
    this.swanTarget.style.transform = `rotate(-${this.swanDeg}deg)`

    this.pizzaDeg = window.scrollY / 60
    this.pizzaTarget.style.transform = `rotate(-${this.pizzaDeg}deg)`

    this.statueDeg = window.scrollY / 70
    this.statueTarget.style.transform = `rotate(${this.statueDeg}deg)`

    this.guavaDeg = window.scrollY / 20
    this.guavaTarget.style.transform = `rotate(-${this.guavaDeg}deg)`
  }
}
