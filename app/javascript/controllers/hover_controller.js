import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hover"
export default class extends Controller {
  color(event) {
    event.currentTarget.src = event.currentTarget.dataset.color
  }

  decolor(event) {
    event.currentTarget.src = event.currentTarget.dataset.bw
  }
}
