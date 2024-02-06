import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="hover"
export default class extends Controller {
  static targets = ["myanmar", "logo"]

  connect() {
    console.log("hi")
  }

  color(event) {
    event.currentTarget.src = event.currentTarget.dataset.color
  }

  decolor(event) {
    event.currentTarget.src = event.currentTarget.dataset.bw
  }

  display(event) {
    if (event.currentTarget.dataset.function == "myanmar") {
      this.myanmarTarget.style.display = "grid"
      setTimeout(() => {
        this.myanmarTarget.style.opacity = 1
      }, 200)
    } else if (event.currentTarget.dataset.function == "logo") {
      this.logoTarget.style.opacity = 1
    }
  }

  hide(event) {
    if (event.currentTarget.dataset.function == "myanmar") {
      this.myanmarTarget.style.opacity = 0

      setTimeout(() => {
        this.myanmarTarget.style.display = "none"
      }, 500)
    } else if (event.currentTarget.dataset.function == "logo") {
      this.logoTarget.style.opacity = 0
    }
  }
}
