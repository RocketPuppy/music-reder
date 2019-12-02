import React, { useState } from 'react';

const filterValidNotes = (notesString) =>
  notesString.replace(/[^abcdefg \r\n]/gi, '');

const upperCase = (notesString) =>
  notesString.toUpperCase();

const toPassages = (notesString) =>
  notesString.split(/[\r\n]/g);

const toChords = (notesString) =>
  notesString.split(" ");

const toNotes = (notesString) =>
  notesString.replace(/[ABCDEFG]/gi, "$&,").split(",");

const NoteInput = ({ passages, setPassages }) => {
  const initialValue = passages.map((chords) => chords.map(ns => ns.join("")).join(" ")).join("\n");
  const [value, setValue] = useState(initialValue);

  return (
    <div id="note-input">
      <h2>Type some notes in here</h2>
      <textarea
        className="text-input"
        value={value}
        onBlur={() => setValue(initialValue)}
        onChange={(e) => {
          setValue(e.target.value);
          setPassages(toPassages(upperCase(filterValidNotes(e.target.value))).map((ns) => toChords(ns).map(toNotes)));
        }}
      />
    </div>
  );
};

export default NoteInput;
