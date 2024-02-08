import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="slide"
export default class extends Controller {
  static targets = ["modal", "index", "image"]

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

      const refNum = event.currentTarget.dataset.ref

      setTimeout(() => {
        const img = document.querySelector(`[data-ref="${refNum}"]`)
        // console.log(img.offsetTop)
        // this.indexTarget.scrollTop = img.offsetTop
        img.scrollIntoView({ behavior: "smooth" })
      }, 800, refNum)


      // document.querySelectorAll('[data-slide-target="image"]')[7].offsetTop
      
    })
  }
}
