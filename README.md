# Udemy-Clone-ReactJS

This is a project that aims to clone the Udemy website using ReactJS as the main framework for building user interfaces.
It is a learning project that showcases how to use various React features and libraries such as React Router, React
Bootstrap and React Icons to create a dynamic and responsive web application that mimics the functionality and design of
the original website. The project also focuses on building more complex UI components using CSS modules, which are a way
of modularizing and scoping CSS styles to specific components, avoiding conflicts and improving maintainability.

## Features

- A landing page with a header, a navbar and a banner
- A courses page that displays different categories and cards of courses
- A course details page that shows the course overview, curriculum, instructor and reviews
- A cart page that allows users to add or remove courses from their cart
- A checkout page that shows the payment options and summary of the order
- A user profile page that shows the user's information and enrolled courses
- A rating system that allows users to rate and review courses
- A search bar that allows users to search for courses by keywords
- A responsive design that adapts to different screen sizes and devices

## Technologies

- ReactJS: A JavaScript library for building user interfaces
- Create React App: A tool that sets up a modern React development environment
- React Router: A library that provides routing functionality for React applications
- React Bootstrap: A library that provides Bootstrap components for React applications
- React Icons: A library that provides icons for React applications

## Installation

To run this project locally, you need to have Node.js and npm installed on your machine. Then follow these steps:

1. Clone this repository to your local machine
   using `git clone https://github.com/AhmedGamal2212/Udemy-Clone-ReactJS.git`
2. Navigate to the project directory using `cd Udemy-Clone-ReactJS`
3. Install the dependencies using `npm install`
4. Start the development server using `npm start`
5. Open http://localhost:3000 in your browser to view the application

## Deployment

To deploy this project to GitHub Pages, you need to have a GitHub account and a repository for this project. Then follow
these steps:

1. Add your repository name to the `homepage` field in the `package.json` file
2. Install the `gh-pages` package using `npm install --save gh-pages`
3. Add the following scripts to the `package.json` file:

```json
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Run `npm run deploy` to build and deploy the application to GitHub Pages
5. Go to your repository settings and enable GitHub Pages for the `gh-pages` branch
6. Your application should be available at https://yourusername.github.io/yourrepositoryname/

### Happy Coding!