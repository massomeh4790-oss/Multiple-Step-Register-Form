Multi Step Register Form (MVC)

A simple multi-step registration form built with Vanilla JavaScript using the MVC architecture.

---

Project Goal

The goal of this project is to practice:

- DOM manipulation
- Event handling
- Clean architecture
- Separation of concerns

The project follows the Model – View – Controller pattern.

---

How It Works

User flow:

1. User enters name and email
2. Clicks Continue
3. Selects topics
4. Sees a summary of the entered information

Data moves like this:

User → View → Controller → Model → View

---

Project Structure

project
│
├── index.html
├── style.css
│
└── js
├── model.js
├── view.js
├── controller.js
└── app.js

---

Architecture

Model

Responsible for storing and managing the data.

Example responsibilities:

- Store name
- Store email
- Store selected topics
- Return the collected data

Example:

setName(name)
setEmail(email)
setTopics(topics)
getData()

The model does not touch the DOM.

---

View

Responsible for everything related to the UI.

Responsibilities:

- Read user input
- Display data
- Update the DOM

Examples:

getName()
getEmail()
getSelectedTopics()
renderSummary()

The view does not contain business logic.

---

Controller

Acts as the middle layer between the Model and the View.

Responsibilities:

- Listen to events
- Get data from the View
- Update the Model
- Tell the View to update

Example flow when user clicks Continue:

1. User clicks button
2. Controller reads inputs from View
3. Controller updates Model
4. Controller asks View to render summary

---

Example Flow

Click Continue
↓
Controller.handleSubmit()
↓
View.getName()
View.getEmail()
View.getTopics()
↓
Model.setData()
↓
View.renderSummary()

---

Features

- Multi step form
- Clean architecture
- Vanilla JavaScript
- DOM rendering
- Checkbox topic selection
- Summary preview

---

Why MVC

MVC makes code:

- easier to read
- easier to scale
- easier to debug
- easier to maintain

Instead of mixing everything in one file.

---

Future Improvements

Possible upgrades:

- Form validation
- Animations between steps
- Local storage
- Backend integration
- Progress bar
- Error messages

---

Learning Focus

This project was built to better understand:

- MVC pattern
- Event handling
- DOM updates
- Component separation
- JavaScript class structure

---

Author Massomeh :)

Practice project for improving front-end architecture skills.
