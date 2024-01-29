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
      this.rightArrowTarget.style.opacity = 0.2
      this.rightArrowTarget.classList.add("book-arrow-disabled")
      this.rightArrowTarget.classList.remove("book-arrow")
      this.rightArrowTarget.dataset.action = "mouseout->hover#decolor click->book#forwardBook"
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
      this.leftArrowTarget.classList.remove("book-arrow-disabled")
      this.leftArrowTarget.classList.add("book-arrow")
      this.leftArrowTarget.dataset.action = "mouseover->hover#color mouseout->hover#decolor click->book#backwardBook"
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
      this.leftArrowTarget.style.opacity = 0.2
      this.leftArrowTarget.classList.add("book-arrow-disabled")
      this.leftArrowTarget.classList.remove("book-arrow")
      this.leftArrowTarget.dataset.action = "mouseout->hover#decolor click->book#backwardBook"
    }

    if (this.pageNumber == 19) {
      this.rightArrowTarget.style.opacity = 1
      this.rightArrowTarget.classList.remove("book-arrow-disabled")
      this.rightArrowTarget.classList.add("book-arrow")
      this.rightArrowTarget.dataset.action = "mouseover->hover#color mouseout->hover#decolor click->book#forwardBook"

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
      this.leftArrowSchoolTarget.classList.remove("book-arrow-disabled")
      this.leftArrowSchoolTarget.classList.add("book-arrow")
      this.leftArrowSchoolTarget.dataset.action = "mouseover->hover#color mouseout->hover#decolor click->book#backwardSchool"
    }

    if (this.imageNumber == 2) {
      this.rightArrowSchoolTarget.style.opacity = 0.2
      this.rightArrowSchoolTarget.classList.add("book-arrow-disabled")
      this.rightArrowSchoolTarget.classList.remove("book-arrow")
      this.rightArrowSchoolTarget.dataset.action = "mouseout->hover#decolor click->book#forwardSchool"
    }
  }

  backwardSchool() {


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
      this.leftArrowSchoolTarget.style.opacity = 0.2
      this.leftArrowSchoolTarget.classList.add("book-arrow-disabled")
      this.leftArrowSchoolTarget.classList.remove("book-arrow")
      this.leftArrowSchoolTarget.dataset.action = "mouseout->hover#decolor click->book#backwardSchool"


      this.rightArrowSchoolTarget.style.opacity = 1
      this.rightArrowSchoolTarget.classList.remove("book-arrow-disabled")
      this.rightArrowSchoolTarget.classList.add("book-arrow")
      this.rightArrowSchoolTarget.dataset.action = "mouseover->hover#color mouseout->hover#decolor click->book#forwardSchool"
    }
  }
}
