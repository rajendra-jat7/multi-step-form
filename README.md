# Multi-Step Form with React
## Overview
This project is a responsive multi-step form built with React.js. The form captures personal and address information over three steps and includes data validation, error handling, and navigation controls. The form data is persisted to local storage, ensuring data retention between sessions.

## Features
### Multi-step form with three steps:
    Personal Information: Name, Email, Phone
    Address Information: Address Line 1, Address Line 2, City, State, Zip Code
    Confirmation: Review all entered data
Tabbed navigation for switching between steps
Client-side validation to ensure all fields are filled before proceeding to the next step
Responsive design for desktop, tablet, and mobile screens
Data persistence using local storage

## Technologies Used
    React.js
    CSS (Bootstrap for layout and responsiveness)
    Jest and React Testing Library for unit testing
## Installation
1. Clone the repository:
    git clone https://github.com/yourusername/multi-step-form-react.git

2. Navigate to the project directory:
    cd multi-step-form-react

3.Install the dependencies:
    npm install

## Usage

1. Start the development server:
    npm start
    This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

2. To run the tests:
    npm test
    This will run the test suite and provide feedback on the terminal.

## Project Structure

    multi-step-form-react
    │
    ├── public
    │   ├── index.html
    │   └── ...
    │
    ├── src
    │   ├── components
    │   │   ├── Step1.js
    │   │   ├── Step2.js
    │   │   ├── Step3.js
    │   │   ├── Navigation.js
    │   │   ├── Step1.test.js
    │   │   ├── Step2.test.js
    │   │   ├── Step3.test.js
    │   │   ├── Navigation.test.js
    │   │   └── ...
    │   │
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.js
    │   └── ...
    │
    ├── package.json
    └── README.md

## Key Components
    Step1.js, Step2.js, Step3.js: Components for each step of the form.
    Navigation.js: Component for tabbed navigation between steps.
    App.js: Main application component that manages state and renders the steps.
    
## Validation and Error Handling
    Client-side validation is implemented to ensure all fields are filled and valid before allowing navigation to the next step.
    Appropriate error messages are displayed if fields are empty or invalid.
    Fields with errors are highlighted.
    
## State Management and Local Storage
    Form data is managed using React state.
    The form data is persisted to local storage when navigating between steps.
    The form fields are pre-filled with saved data if the user revisits the form.
    
## Responsive Design
    The form is designed to be responsive and works well on desktop, tablet, and mobile screens.
    Bootstrap is used for layout and responsiveness.

## Testing
    Unit tests are written using Jest and React Testing Library.
    Tests cover rendering of components, form validation, and navigation between steps.

## Assumptions and Decisions
    The form steps must be completed sequentially.
    Data is saved to local storage on each step transition.
    Validation errors must be clearly communicated to the user.
    
## Future Enhancements
    Implement server-side validation.
    Add transitions or animations between steps for enhanced user experience.
    Improve styling for a more modern look.

## Contributing
    Contributions are welcome! Please fork the repository and create a new branch for your feature or bug fix. Submit a pull request with a clear description of your changes.
