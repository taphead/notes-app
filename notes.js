const fs = require("fs");

const getNotes = function () {
  return "Your notes...";
};

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(notes);
  } else {
    console.log("note title taken");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function (title) {
  const notes = loadNotes();
  const filterNote = notes.filter((note) => {
    {
      if (note.title === title) {
        console.log("note of title " + title + " removed");
      }
      return note.title != title;
    }
  });
  if (notes.length === filterNote.length) {
    console.log("Note not found");
  }
  saveNotes(filterNote);
};

const listNotes = function () {
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const readNote = function (title) {
  const notes = loadNotes();
  const found = notes.find((note) => note.title === title);
  if (found) {
    console.log(found.title);
  } else {
    console.log("Note not found");
  }
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
