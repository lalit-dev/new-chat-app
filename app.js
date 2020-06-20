const yargs = require('yargs');

const notes = require('./notes');
// console.log("[NOTES.JS] ", notes);


//yargs version
yargs.version('0.1.0');

//create add note command
yargs.command({
  command: 'add',
  describe: 'add note',
  builder:{
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: "string"
    },
    body:{
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }

  },
  handler: function(argv) {
    console.log("[ADD] Title: " + argv.title + " /n body:" + argv.body);
    notes.add(argv.title, argv.body);
  }
})

// command to remove note
yargs.command({
  command: 'rmv',
  describe: "remove a note",
  builder: {
    title:{
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }

  },
  handler: (argv) => {
    console.log("Removing a note");
    const deletedNote = notes.remove(argv.title);
    console.log('Removed Note: ', deletedNote);
  }
})

// list note command
yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    console.log('Listing notes');
    const titles = notes.list()
    console.log(titles);
  }
})

//read note command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    console.log("Reading a note");
    const note = notes.read(argv.title)
    console.log(note);
  }
})


yargs.parse();
// console.log("!!!!!",yargs.argv);








