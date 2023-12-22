import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slide"
export default class extends Controller {
  static targets = ["modal", "index"]

  infoIn(event) {
    this.indexTarget.classList.add("hidden")

    setTimeout(() => {
      this.indexTarget.style.display = "none"
    }, 500)


    this.modalTargets.forEach((modal) => {
      if (modal.dataset.ref == event.currentTarget.dataset.ref) {
        setTimeout(() => {
          modal.style.display = "block"
        }, 600)

        setTimeout(() => {
          modal.classList.remove("hidden")
        }, 700)
      }
    })
  }

  infoOut(event) {
    this.modalTargets.forEach((modal) => {
      if (modal.dataset.ref == event.currentTarget.dataset.ref) {
        modal.classList.add("hidden")

        setTimeout(() => {
          modal.style.display = "none"
        }, 500)
      }

      setTimeout(() => {
        this.indexTarget.style.display = "grid"
      }, 600)

      setTimeout(() => {
        this.indexTarget.classList.remove("hidden")
      }, 700)
    })
  }
}
