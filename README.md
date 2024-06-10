# Text Editor - PWA (Progressive Web Application)

## Description 

The aim of this project is to create a single page progressive web application called JATE (Just Another Text Editor) that functions as a text editor and allows a user to creates notes that can be stored and retrieved for when the user revisits the page. The application is designed to run when can be used when a user is either online or offline and can be installed on the users' desktop and used in that capacity.

## Contents 

* [Criteria](#criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Built With](#built-with)
* [Images](#images)
* [License](#license)
* [Links](#links)


## Criteria

    GIVEN a text editor web application
    WHEN I open my application in my editor
    THEN I should see a client server folder structure
    WHEN I run `npm run start` from the root directory
    THEN I find that my application should start up the backend and serve the client
    WHEN I run the text editor application from my terminal
    THEN I find that my JavaScript files have been bundled using webpack
    WHEN I run my webpack plugins
    THEN I find that I have a generated HTML file, service worker, and a manifest file
    WHEN I use next-gen JavaScript in my application
    THEN I find that the text editor still functions in the browser without errors
    WHEN I open the text editor
    THEN I find that IndexedDB has immediately created a database storage
    WHEN I enter content and subsequently click off of the DOM window
    THEN I find that the content in the text editor has been saved with IndexedDB
    WHEN I reopen the text editor after closing it
    THEN I find that the content in the text editor has been retrieved from our IndexedDB
    WHEN I click on the Install button
    THEN I download my web application as an icon on my desktop
    WHEN I load my web application
    THEN I should have a registered service worker using workbox
    WHEN I register a service worker
    THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
    WHEN I deploy to Render
    THEN I should have proper build scripts for a webpack application


## Installation 

* Run 'npm i' in the terminal to install the required packages.
* Then run 'npm run start', using concurrently to to run build and start the server.  
* Once this is done, you should then be able to access the application.

## Usage 

* Access the JATE application using this link 
* Once on the application, you are then able to enter any text of your choice.
* The text will then be saved in your browser so that when you revisit the application, it will still be on the page and you are able to either remove it or continue to add to it.
* The application will continue to work even when you are offline.
* Clicking on the install button present on the top left-hand corner will you install the application onto your desktop. It can then be used in the same way as it is used in the browser.

## Built With 

* JavaScript
* Node.js
* NPM
* Express.js
* Webpack

## Images 




## License 

Licensed under the MIT license.

## Links 

Link to deployed application - 