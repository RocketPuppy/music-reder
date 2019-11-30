import React, { useState } from 'react';
import './App.css';
import NoteColorPicker from "./note-color-picker";

const grey = "#888888";
const initialColors = {
  "A": grey,
  "B": grey,
  "C": grey,
  "D": grey,
  "E": grey,
  "F": grey,
  "G": grey
};

const  setColorForNote = (colors, setColors) => (note, color) =>
  setColors({ ...colors, [note]: color });

function App() {
  const [colors, setColors] = useState(initialColors);
  const [notes, setNotes] = useState([]);

  return (
    <div className="App">
      <NoteColorPicker colors={colors} setColorForNote={setColorForNote(colors, setColors)} />
      <div id="composition">
        <div id="notes" />
        <div id="note-input" />
      </div>
    </div>
  );
}

export default App;
