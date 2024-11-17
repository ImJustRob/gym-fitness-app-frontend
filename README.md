# React + Vite

Gym Fitness App
A web application to track and manage fitness routines, including exercises, sets, reps, and more. Users can create accounts, log in, create new routines, and view detailed information about their exercises and routines.

This project allows users to:

*Create and manage fitness routines with exercises, reps, and sets.
*View detailed information about exercises and routines.
*Sign up, log in, and log out securely using JWT authentication.
*Use a responsive and simple interface with React and React Router for navigation.

Technologies Used
*Frontend: React, React Router, Axios
*Backend: Ruby on Rails (Assumed for example, since routes indicate users.json and routines.json)
*State Management: React hooks (useState, useEffect)
*CSS: Simple custom styles (could be expanded to a UI framework like Bootstrap or Tailwind)

Features
*User Authentication: Sign up, login, and logout functionality with JWT authentication.
*Routine Management: Create, update, view, and delete fitness routines.
*Exercise Management: Add exercises to routines, specifying sets and reps.
*Responsive Design: Optimized for mobile and desktop use.

Installation & Setup

1. Clone the Repository

git clone https://github.com/your-username/gym-fitness-app-frontend.git
cd gym-fitness-app-frontend

2. Install Dependencies
Make sure you have Node.js and npm (or yarn) installed. Then, run the following command to install the required dependencies:

npm install
3. Run the Application
To start the app in development mode, run:

npm start
This will start the React development server at http://localhost:3000.

4. Backend Setup
Ensure that the backend API is running. The frontend expects the API to be running locally on port 3000. The backend should be serving user and routine data via RESTful endpoints like /users.json and /routines.json.

Features

Authentication:

*Users can sign up, log in, and log out using JWT-based authentication.
*JWT tokens are stored in localStorage and included in requests to secure API endpoints.

Routines Management:

*Users can create and manage routines by adding exercises, setting the number of sets and reps.
*Routines are displayed with related exercise information.

Exercise Management:

*A list of exercises is displayed with their names, descriptions, and videos.
*Users can view exercises, add them to routines, and manage routine details.

Error Handling:

*Form submission errors (e.g., validation issues or server errors) are displayed clearly to the user.

UI:

*Simple and responsive user interface.
*Modal dialogs for displaying information and handling interactions like deleting routines.


Project Structure
/src
  /components
    Header.js            # Header component with navigation
    Footer.js            # Footer component
    HomePage.js          # Homepage for routing overview
    LoginPage.js         # Login form and authentication
    SignupPage.js        # Signup form and user creation
    ExercisesPage.js     # Exercise listing page
    RoutinesPage.js      # Routines management page
    RoutinesShow.js      # Display and edit a single routine
    RoutinesNew.js       # Form for creating a new routine
    Modal.js             # Modal for showing details
  /assets
    /styles
      Modal.css          # Custom styles for modals and layout
  App.js                 # Main entry point for routing
  index.js               # React DOM rendering

Contributing

1.Fork the repository.

2.Create your feature branch (git checkout -b feature-name).

3.Commit your changes (git commit -am 'Add new feature').

4.Push to the branch (git push origin feature-name).

5.Open a pull request.

We welcome contributions that improve the functionality, usability, and design of the application.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to open an issue or reach out to the project maintainers.
