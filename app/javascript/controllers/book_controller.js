import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="book"
export default class extends Controller {
  static targets = ["cover", "page", "leftArrow", "rightArrow"]

  connect() {
    this.pageNumber = 0
    // this.leftArrowTarget.style.opacity = 0
  }

  forward() {
    if (this.pageNumber == 19) {
      this.rightArrowTarget.style.opacity = 0
    }

    if (this.pageNumber <= 19) {
      this.pageTargets.forEach((page) => {
        if (page.dataset.status == "active") {
          page.dataset.status = "inactive"
          page.classList.add("hidden")
          this.pageNumber = parseInt(page.dataset.page, 10) + 1
        }
  
        if (page.dataset.page == this.pageNumber) {
          page.classList.remove("hidden")
          page.dataset.status = "active"
        }
      })
    }

    if (this.pageNumber > 1) {
      this.leftArrowTarget.style.opacity = 1
    }
  }

  backward() {
    if (this.pageNumber >= 2) {
      this.pageTargets.forEach((page) => {
        if (page.dataset.status == "active") {
          page.dataset.status = "inactive"
          page.classList.add("hidden")
          this.pageNumber = parseInt(page.dataset.page, 10) - 1
        }
      })
  
      this.pageTargets.forEach((page) => {
        if (page.dataset.page == this.pageNumber) {
          page.classList.remove("hidden")
          page.dataset.status = "active"
        }
      })
    }

    if (this.pageNumber == 1) {
      this.leftArrowTarget.style.opacity = 0
    }

    if (this.pageNumber == 19) {
      this.rightArrowTarget.style.opacity = 1
    }
  }
}
