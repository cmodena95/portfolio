import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="book"
export default class extends Controller {
  static targets = ["cover", "page", "leftArrow", "rightArrow", "leftArrowSchool", "rightArrowSchool", "schoolImage"]

  connect() {
    this.pageNumber = 0
    this.imageNumber = 0
  }

  forwardBook() {
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

  backwardBook() {
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

  forwardSchool() {
    if (this.imageNumber < 2) {
      this.schoolImageTargets.forEach((image) => {
        if (image.dataset.status == "active") {
          image.dataset.status = "inactive"
          image.classList.add("hidden")
          this.imageNumber = parseInt(image.dataset.image, 10) + 1
        }

        if (image.dataset.image == this.imageNumber) {
          image.classList.remove("hidden")
          image.dataset.status = "active"
        }
      })
    }

    if (this.imageNumber > 0) {
      this.leftArrowSchoolTarget.style.opacity = 1
    }

    if (this.imageNumber == 2) {
      this.rightArrowSchoolTarget.style.opacity = 0
    }

    // console.log(this.imageNumber)
  }

  backwardSchool() {

    console.log(this.imageNumber)

    if (this.imageNumber > 1) {
      this.schoolImageTargets.forEach((image) => {
        if (image.dataset.status == "active") {
          image.dataset.status = "inactive"
          image.classList.add("hidden")
          this.imageNumber = parseInt(image.dataset.image, 10) - 1
        }
      })
  
      this.schoolImageTargets.forEach((image) => {
        if (image.dataset.image == this.imageNumber) {
          image.classList.remove("hidden")
          image.dataset.status = "active"
        }
      })
    }

    if (this.imageNumber == 1) {
      this.leftArrowSchoolTarget.style.opacity = 0
      this.rightArrowSchoolTarget.style.opacity = 1
    }
  }
}
