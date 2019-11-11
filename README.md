## Overview

This project is a starting point for a technical challange to build a React To Do application.

The project consists of two parts:

**Server** - A very basic REST API that provides various endpoints for managing todos.

**Front-End** - In the intial state of the repository this is bootstrapped with [Create React App](https://github.com/facebook/create-react-app) default tooling but does not yet contain any business logic relating to the To Do app.

## About the Technical Challenge

As a Front-End developer at Ordoo you'll work extensivly with our internal API. This test has been devised to evaluate a broad range of skills and to understand how the participant would approach a greenfield project.

The API is a simple To Do REST API and has endpoints for:

| Type | Description | Method | Route |
| ---- | ----------- | ------ | ----- |
| Index | List all To Dos | GET | `/` |
| Show | List a single To Do | GET | `/:id` |
| Create | Create a To Do | POST | `/` |
| Update | Update a To Do | PUT | `/:id` |
| Destroy | Delete a To Do | DELETE | `/:id` |

Your task is provide an Front End for the application that exhibits the sort of behaviours you'd expect to find in such an app. In the interest of time there aren't any expectations for this to be a 'complete' app as the submission but rather just enough to be able to review the partial implementation and discuss the approach.

The challenge will consist of:

1. A quick call to discuss the challenge and any questions.
2. Working on the challenge independently and chatting on Slack / Hangouts as appropriate. Time can be scheduled in to pair if needed.
3. A final call to review things.

Lastly, a couple of things to note:

- Please create a **private** fork this repository and invite me (`adambutler`) as a collaborator.
- A [Postman](https://www.getpostman.com/) collection demonstrating the API endpoints has been included [here](https://github.com/ordoo/ordoo-todo/blob/master/postman.json). This can be imported to show you how the API is structured and for testing.
- This codebase has been setup to speed thing up and help by providing an environment with some common tooling in mind. If you have preferences over using another setup feel free to change things as much as you see fit.
- If this seems all a bit too much, please do not hesitate to let me know and I'll try and approach things differently.

## Prerequisites

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find the full Create React App guide [here](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md).

For the sake of simplicity the server does not persist changes to a database and will reset on load. Futhermore the server does not implement any authentication.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

- `public/index.html` is the page template;
- `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run server`

Starts the server with the API on port 3000.
