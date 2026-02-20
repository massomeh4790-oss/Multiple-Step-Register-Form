export class formView {
  constructor() {
    this.nameInput = document.getElementById("name");
    this.emailInput = document.getElementById("email");
    this.topicCheckboxes = document.querySelectorAll('input[name="topics"]');
    this.stepText = document.querySelector(".step-next");
    this.dots = document.querySelectorAll(".dot");
    this.steps = document.querySelectorAll(".form-step");
    this.currentStep = 0;

    //Summary elements
    this.summaryName = document.getElementById("summary-name");
    this.summaryEmail = document.getElementById("summary-email");
    this.topicList = document.querySelector(".topic-list");
    this.continueBtns = document.querySelectorAll(".continue-btn");
  }

  getName() {
    return this.nameInput.value;
  }

  getEmail() {
    return this.emailInput.value;
  }

  getSelectedTopics() {
    return [...this.topicCheckboxes]
      .filter((cb) => cb.checked)
      .map((cb) => cb.parentElement.querySelector("span").textContent);
  }

  addContinueHandler(handler) {
    this.continueBtns.forEach((btn) => {
      btn.addEventListener("click", handler);
    });
  }

  nextStep() {
    this.steps[this.currentStep].classList.remove("active");
    this.dots[this.currentStep].classList.remove("active");

    this.currentStep++;
    this.steps[this.currentStep].classList.add("active");
    this.dots[this.currentStep].classList.add("active");

    this.updateUI();
  }

  updateUI() {
    this.stepText.textContent = `Step ${this.currentStep + 1} of 3`;

    if (this.currentStep === 2) {
      this.continueBtns[this.currentStep].textContent = "Submit";
    }
  }

  renderSummary(data) {
    this.summaryName.textContent = data.name;
    this.summaryEmail.textContent = data.email;

    this.topicList.innerHTML = ``;
    data.topics.forEach((topic) => {
      const li = document.createElement("li");
      li.textContent = topic;
      this.topicList.appendChild(li);
    });
  }
}
