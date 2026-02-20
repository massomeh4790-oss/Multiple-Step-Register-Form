export class formController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.init();
  }

  init() {
    this.view.addContinueHandler(() => this.handleNext());
  }

  handleNext() {
    // Step 1 validation
    if (this.view.currentStep === 0) {
      const name = this.view.getName();
      const email = this.view.getEmail();

      if (!name || !email) {
        alert("Please fill all fields");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
      }

      this.model.setName(name);
      this.model.setEmail(email);
    }

    // Step 2
    if (this.view.currentStep === 1) {
      const topics = this.view.getSelectedTopics();
      this.model.setTopics(topics);
      const data = this.model.getData();
      this.view.renderSummary(data);
    }

    // Step 3 = Submit
    if (this.view.currentStep === 2) {
      alert("Registration Successful 🎉");
      location.reload();
      return;
    }

    this.view.nextStep();
  }
}
