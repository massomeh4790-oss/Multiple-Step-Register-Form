export class formModel {
  constructor() {
    this.name = "";
    this.email = "";
    this.topics = [];
  }

  //Setters
  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  setTopics(topics) {
    this.topics = topics;
  }

  //Getter
  getData() {
    return {
      name: this.name,
      email: this.email,
      topics: this.topics,
    };
  }
}
