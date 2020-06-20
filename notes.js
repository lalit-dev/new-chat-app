const fs = require('fs');
const chalk = require('chalk');

const constants = {
    notesFilePath: 'notes.json'
}

// const getNotes = (filePath, options, callback) => {
//     fs.readFile(filePath, options, callback )
// }

const addNotes = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find( (note) => {
        return note.title === title;
    })

    if(duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        console.log(chalk.green.bgWhite('Note Added!'));
        saveNotes(notes);
    } else {
        console.log(chalk.red.bgWhite("Note with same \"title\" already exist"))
    }
}

const removeNotes = (title) => {
    const notes = loadNotes();
    const deletedNotes = [];

    const updatedNotes = notes.filter( (note) => {
        if(note.title === title){
            deletedNotes.push(note);
            return false;
        } else {
            return true;
        }
    })

    if(notes.length > updatedNotes.length){
        console.log(chalk.inverse.green(' Note Removed '));
    saveNotes(updatedNotes);
    } else {
        console.log(chalk.red.inverse('Note not found'))
    }

    return deletedNotes;

}

const listNotes = () => {
    const notes = loadNotes();
    const notesTitles = notes.map((note) => note.title);
    console.log(chalk.green.inverse('Listed Notes'));
    return notesTitles;
}

const readNotes = (title) => {
    const notes = loadNotes();

    const note = notes.find( note => {
        return note.title === title;
    })

    if(note){
        console.log(chalk.green.inverse('Note Found'));
        return note
    } else {
        console.log(chalk.red.inverse('No note found'));
        // return 
    }
}

function loadNotes() {
    try {
        const dataBuffer = fs.readFileSync(constants.notesFilePath);
        const notesJSON = dataBuffer.toString();
        return JSON.parse(notesJSON);

    } catch {
        return [];
    }

}

const saveNotes = function (notes) {
    const notesString = JSON.stringify(notes); 
    fs.writeFileSync(constants.notesFilePath, notesString)
}

module.exports = {
    add: addNotes,
    remove: removeNotes,
    list: listNotes,
    read: readNotes
}
