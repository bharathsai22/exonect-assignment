Country, State, and City Management Application
A React-based application for managing countries, states, and cities in a hierarchical structure. This project allows users to add, edit, and delete countries, states, and cities with a clean and intuitive user interface.

Features
Country Management:

Add a new country.

Edit the name of an existing country.

Delete a country (and all its associated states and cities).

State Management:

Add a new state to a specific country.

Edit the name of an existing state.

Delete a state (and all its associated cities).

City Management:

Add a new city to a specific state.

Delete a city.

Confirmation Dialogs:

Confirmation alerts for delete and edit actions to prevent accidental changes.

Modern UI:

Clean and visually appealing design with gradients, shadows, and hover effects.

Responsive layout for seamless use on different screen sizes.

Technologies Used
ReactJS: For building the component-based user interface.

JavaScript (ES6): For handling state management, event handling, and data manipulation.

CSS: For styling the application with modern design elements.

Installation
Follow these steps to set up the project locally:

Clone the repository.

Navigate to the project directory.

Install dependencies using npm.

Run the application using npm start.

Open the app in your browser at http://localhost:3000.

Usage
Add a Country:

Click the "Add Country" button and enter the country name.

Edit a Country:

Click the "Edit" button next to a country and enter the new name.

Delete a Country:

Click the "Delete" button next to a country and confirm the action.

Add a State:

Under a specific country, click the "Add State" button and enter the state name.

Edit a State:

Click the "Edit" button next to a state and enter the new name.

Delete a State:

Click the "Delete" button next to a state and confirm the action.

Add a City:

Under a specific state, click the "Add City" button and enter the city name.

Delete a City:

Click the "Delete" button next to a city and confirm the action.

Folder Structure
The project is organized as follows:

App.js: The main component that manages the state of countries and renders the CountryList.

CountryList.js: Displays the list of countries and allows managing states for each country.

StateList.js: Displays the list of states for a specific country and allows managing cities for each state.

CityList.js: Displays the list of cities for a specific state and allows adding or deleting cities.

styles.css: Contains all the styles for the application.

Screenshots
Country Management: Adding and managing countries.

State Management: Adding and managing states under a country.

City Management: Adding and managing cities under a state.

Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch for your feature or bugfix.

Commit your changes.

Push your branch and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Built with ❤️ using ReactJS.

Inspired by hierarchical data management systems.

Enjoy managing your countries, states, and cities! 🌍🗺️
