
# MICHELE'S NOTE TAKER  READ.ME

# Description/Purpose

My note taker is a tool for people who need to create notes for themselves on the go. A user can press the "Get Started" Button and then input and save notes for themselves.  Once a task has been completed, it is easily deleted from the list.

## Languages Used

- HTML
- CSS
- JAVASCRIPT / JQUERY
- NODE.JS

## Libraries/3rd Party APIs 

The site pulls from the following libraries and third-party APIs:
- Express
- JQuery
- Bootstrap 
- Font Awesome (https://use.fontawesome.com/releases/v5.3.1)
- It requires fs (file system) and path module.


## Features

Michele's Note Taker begins with a home page centered on a "Get Started" Button.  This button (via a href) will redirect the user to the notes.html.  Once there, the user can input a title and text of a note and save it as a list item.  The note can me edited and deleted as needed.


## File Structure

The site is built with two html pages: index.html (home page) and notes.html (note input/edit/delete page).  

The index.js file contains the ajax calls that outline the get, post and delete requests.  It also contains the save functionality allowing the saved notes to render when the page is opened.

The db.json file is the database that outlines the keys of the object.  They are the title, text and id. 

The server.js file outlines the routes, and establishes the PORT (process.env.PORT || 8080).

Front end files are nested in the "public" folder, which include the html, css and index.js files.

## Examples/Screenshots

<img width="1625" alt="Screen Shot 2020-12-22 at 3 07 07 PM" src="https://user-images.githubusercontent.com/72819785/102941691-39af2800-4468-11eb-94fd-718af68caec1.png">


## Future Development

Michele's Note Taker (2.0) will include a more modern and pleasing UI.  It will also allow notes to be edited, and will allow the user delete notes from the page without refreshing -- functionality coming!  It will also include a date function which will allow the user to track how long ago a note was posted.



