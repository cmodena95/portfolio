import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="languages"
export default class extends Controller {
  static targets = ["illustrations", "about", "contact"]

  connect() {
  }

  switchLanguage(event) {
    // console.log(this.illustrationsTarget.src)
    // console.log(this.illustrationsTarget.src.match(/(\_en|\_pt|\_es)/))



    const language = event.currentTarget.dataset.language
    const currentURL = (window.location.href).match(/(.*)\?(.*)/)[1];
    window.history.replaceState("", "", currentURL + `?language=${language}`);

    if (event.currentTarget.dataset.language == "en") {
      this.illustrationsTarget.src = this.illustrationsTarget.dataset.enBw
      this.illustrationsTarget.dataset.color = this.illustrationsTarget.dataset.enCol
      this.illustrationsTarget.dataset.bw = this.illustrationsTarget.dataset.enBw

      this.aboutTarget.src = this.aboutTarget.dataset.enBw
      this.aboutTarget.dataset.color = this.aboutTarget.dataset.enCol
      this.aboutTarget.dataset.bw = this.aboutTarget.dataset.enBw

      this.contactTarget.src = this.contactTarget.dataset.enBw
      this.contactTarget.dataset.color = this.contactTarget.dataset.enCol
      this.contactTarget.dataset.bw = this.contactTarget.dataset.enBw
    } else if (event.currentTarget.dataset.language == "es") {
      this.illustrationsTarget.src = this.illustrationsTarget.dataset.esBw
      this.illustrationsTarget.dataset.color = this.illustrationsTarget.dataset.esCol
      this.illustrationsTarget.dataset.bw = this.illustrationsTarget.dataset.esBw

      this.aboutTarget.src = this.aboutTarget.dataset.esBw
      this.aboutTarget.dataset.color = this.aboutTarget.dataset.esCol
      this.aboutTarget.dataset.bw = this.aboutTarget.dataset.esBw

      this.contactTarget.src = this.contactTarget.dataset.esBw
      this.contactTarget.dataset.color = this.contactTarget.dataset.esCol
      this.contactTarget.dataset.bw = this.contactTarget.dataset.esBw
    } else if (event.currentTarget.dataset.language == "pt") {
      this.illustrationsTarget.src = this.illustrationsTarget.dataset.ptBw
      this.illustrationsTarget.dataset.color = this.illustrationsTarget.dataset.ptCol
      this.illustrationsTarget.dataset.bw = this.illustrationsTarget.dataset.ptBw

      this.aboutTarget.src = this.aboutTarget.dataset.esBw
      this.aboutTarget.dataset.color = this.aboutTarget.dataset.esCol
      this.aboutTarget.dataset.bw = this.aboutTarget.dataset.esBw

      this.contactTarget.src = this.contactTarget.dataset.esBw
      this.contactTarget.dataset.color = this.contactTarget.dataset.esCol
      this.contactTarget.dataset.bw = this.contactTarget.dataset.esBw
    }
  }
}


// current issue = params are replaced in URL, but only temporarily (upon click, changes back because langauge was pre-set in controller)

// change url when params change