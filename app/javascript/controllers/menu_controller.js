import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {
  static targets = ["menu"]
  connect() {
    this.rotate = 0
  }

  toggleMenu(event) {
    this.menuTarget.classList.toggle("menu-hidden")
    this.rotate += 540
    event.currentTarget.style.transform = `rotate(${this.rotate}deg)`

    // if (event.currentTarget.dataset.status == "closed") {
    //   event.currentTarget.dataset.status = "open"
    // } else {
    //   event.currentTarget.dataset.status = "closed"
    // }
  }
}
