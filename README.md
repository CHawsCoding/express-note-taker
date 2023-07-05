# Express-Note-Taker

The goal of this project was to take the starter code provided by the course and edit it as well as add to it to make it a fully functional note taking app where notes can be saved/deleted and queried as an api. It has been deployed using heroku. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployed Application](#deployed-application)
- [Credits](#credits)
- [License](#license)
- [Sources](#sources)

## Installation

To install and run the Note Taker application locally, follow these steps:

1. Clone the repository to your local machine.
2. Open a terminal or command prompt and navigate to the project's root directory.
3. Run `npm install` to install the required dependencies.
4. Start the application by running `node server` in the terminal.
5. Open your web browser and access the application at `http://localhost:3000`.

## Usage

When you open the Note Taker application, you will be presented with a landing page that displays a link to the notes page. Clicking on the link will take you to the notes page where you can view existing notes and create new notes.

- To create a new note, enter a title and the note's text in the right-hand column, then click the Save icon in the navigation bar.
- Saved notes will appear in the left-hand column alongside existing notes.
- Clicking on an existing note in the list will display the note's contents in the right-hand column.
- You can create new notes at any time by clicking the Write icon in the navigation bar.

## Deployed Application

The Note Taker application has been deployed to Heroku and is accessible at the following URL:
https://ch-express-note-taker-50481647717a.herokuapp.com/

![Screenshot1](/develop/public/assets/Screen%20Shot%202023-07-05%20at%204.00.11%20PM.png)
![Screenshot2](/develop/public/assets/Screen%20Shot%202023-07-05%20at%204.20.40%20PM.png)

You can visit the deployed application and start using it immediately without having to run it locally.

## Credits

This application was developed by CHawsCoding. It was built using Express.js and utilizes front-end HTML, CSS, and JavaScript. and was deployed using Heroku.

## License

None.

## Sources

While having a lot of issues deploying with heroku I used this stack overflow article to solve the problem: https://stackoverflow.com/questions/18406721/heroku-does-not-appear-to-be-a-git-repository

This website was referenced to help with the app.delete function: https://expressjs.com/en/5x/api.html#app.delete.method