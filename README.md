# Express Note
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

## Description

 This is an application for note taking that which is used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. The application’s front end has features a note taker with the option to create, save, clear, and delete notes. The back end, connects the two, and then the entire application is deployed to Heroku.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a "Save Note" button and a "Clear Form" button appear in the navigation at the top of the page
WHEN I click on the Save button
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes and the buttons in the navigation disappear
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column and a "New Note" button appears in the navigation
WHEN I click on the "New Note" button in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column and the button disappears
```

## Installation

```bash
git clone git@github.com:fredm23579/express-note.git
```

## Demo

The following GIF shows the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/demo.gif)

## Usage

On the back end, the application includes a `db.json` file that is used to store and retrieve notes using the `fs` module.

The following HTML routes have been created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes have been created:

* `GET /api/notes` reads the `db.json` file and returns all saved notes as a JSON.

* `POST /api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client. Each note a unique id when it's saved.

* `DELETE /api/notes/:id` receives a query parameter that contains the id of a note to delete. To delete a note, all notes from the `db.json` file are read, then the note with the given `id` property is removed, then the notes are rewritten to the `db.json` file.

## Repo Link & Live App Link

* [Repo Link](https://github.com/fredm23579/express-note)

* [Live App on Heroku](https://github.com/)

## Contributing
Contact the primary developer for contributions.

## Questions
Contact me:
* GitHub: [fredm23579](https://github.com/fredm23579)
* Email: motta@g.ucla.edu
  
## License
This project is covered under the MIT license. To learn more, see the accompanying LICENSE file or visit [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT).