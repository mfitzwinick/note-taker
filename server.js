// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const notes = require("./db/db.json");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Middleware for Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + 'public'))


// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
//IM CONFUSED ABOUT THIS?????/////
app.get("/assets/css/styles.css", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/assets/css/styles.css"));
});

app.get("/assets/js/index.js", function (req, res) {
    res.sendFile(path.join(__dirname, "./public/assets/js/index.js"));
});
//////////
app.get("/api/notes", function (req, res) {

    return res.json(notes)

});



// Displays a single note, or returns false
app.get("/api/notes/:note", function (req, res) {
    var noteInput = req.params.note;

    console.log(noteInput);

    for (var i = 0; i < notes.length; i++) {
        if (noteInput === notes[i].title) {
            return res.json(notes[i]);
        }
    }

    return res.json(false);
});



app.post("/api/notes", function (req, res) {

    var newNote = req.body;
    newNote.id = newNote.title.replace(/\s+/g, "").toLowerCase();
    console.log(newNote);

    notes.push(newNote);

    res.json(newNote);
});

app.delete('/api/notes/:id', function (req, res) {
    var deletedNote = req.params.id
    console.log("we are here we are here we are here")
    
  for (var i = 0; i < notes.length; i++) {
    if (deletedNote === notes[i].id) {
        notes[i]={}
    }
}
})



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
