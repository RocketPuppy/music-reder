import React from 'react';

const filterValidNotes = (notesString) =>
  notesString.replace(/[^abcdefg]/gi, '');

const upperCase = (notesString) =>
  notesString.toUpperCase();

const toNotes = (notesString) =>
  notesString.replace(/[ABCDEFG]/gi, "$&,").split(",");

const NoteInput = ({ notes, setNotes }) => (
  <div id="note-input">
    <h2>Type some notes in here</h2>
    <textarea
      className="text-input"
      value={notes.join("")}
      onChange={(e) => (
        setNotes(toNotes(upperCase(filterValidNotes(e.target.value))))
      )}
    />
  </div>
);

export default NoteInput;
