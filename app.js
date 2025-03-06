const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "remove a new note",
  builder: {
    title: {
      describe: "Remove note of said title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "list out all the notes",
  handler: function () {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "read out all the notes",
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

console.log(yargs.argv);
