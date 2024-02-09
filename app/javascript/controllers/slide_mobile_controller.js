import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slide-mobile"
export default class extends Controller {
  static targets = ["index", "show"]

  display(event) {
    this.indexTarget.classList.add("hidden")
    setTimeout(() => {
      this.indexTarget.style.display = "none"
    }, 600)

    this.showTargets.forEach((show) => {
      if (show.dataset.ref == event.currentTarget.dataset.ref) {
        setTimeout(() => {
          show.classList.remove("hidden")
        }, 700)

        setTimeout(() => {
          show.classList.remove("off-screen")
        }, 800)
      }
    })
  }

  hide(event) {
    this.showTargets.forEach((show) => {
      if (show.dataset.ref == event.currentTarget.dataset.ref) {
        // setTimeout(() => {
          show.classList.add("off-screen")
        // }, 600)

        setTimeout(() => {
          show.classList.add("hidden")
        }, 600)
      }

      setTimeout(() => {
        this.indexTarget.style.display = "block"
      }, 800)

      setTimeout(() => {
        this.indexTarget.classList.remove("hidden")
      }, 900)
      
    })

    const refNum = event.currentTarget.dataset.ref

    setTimeout(() => {
      const img = document.querySelector(`[data-ref="${refNum}"]`)
      img.scrollIntoView({ behavior: "smooth" })
    }, 800, refNum)
  }
}
