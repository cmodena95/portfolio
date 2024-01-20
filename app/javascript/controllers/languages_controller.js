import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="languages"
export default class extends Controller {
  static targets = ["illustrations", "about", "contact", "illustrationsLink", "aboutLink", "contactLink", "btn"]

  switchLanguage(event) {
    const language = event.currentTarget.dataset.language
    const currentURL = (window.location.href).match(/(.*)\?(.*)/)[1];
    window.history.replaceState("", "", currentURL + `?language=${language}`);

    if (language == "en") {
      this.illustrationsTarget.src = this.illustrationsTarget.dataset.en
      this.aboutTarget.src = this.aboutTarget.dataset.en
      this.contactTarget.src = this.contactTarget.dataset.en
    } else if (language == "es") {
      this.illustrationsTarget.src = this.illustrationsTarget.dataset.es
      this.aboutTarget.src = this.aboutTarget.dataset.es
      this.contactTarget.src = this.contactTarget.dataset.es
    } else if (language == "pt") {
      this.illustrationsTarget.src = this.illustrationsTarget.dataset.pt
      this.aboutTarget.src = this.aboutTarget.dataset.es
      this.contactTarget.src = this.contactTarget.dataset.es
    }

    this.illustrationsLinkTarget.href = this.illustrationsLinkTarget.href.match(/(.*)\?(.*)/)[1] + `?language=${language}`
    this.contactLinkTarget.href = this.contactLinkTarget.href.match(/(.*)\?(.*)/)[1] + `?language=${language}`
    this.aboutLinkTarget.href = this.aboutLinkTarget.href.match(/(.*)\?(.*)/)[1] + `?language=${language}`
    
    this.btnTargets.forEach((btn) => {
      btn.classList.remove("active")
    })

    event.currentTarget.classList.add("active")
  }
}
