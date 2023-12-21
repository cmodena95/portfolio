import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slide"
export default class extends Controller {
  infoIn() {
    this.element.classList.add("hidden")
  }
}
