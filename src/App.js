import React, { useState } from 'react';
import './App.css';
import NoteColorPicker from "./note-color-picker";
import Notes from "./notes";
import NoteInput from "./note-input";

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

// [passages][chords][notes]
const initialPassages = [
  [["A", "C", "G"],
  ["E", "A"]],
  [["D", "C"],
  ["E", "A"]],
];

const setColorForNote = (colors, setColors) => (note, color) =>
  setColors({ ...colors, [note]: color });

function App() {
  const [colors, setColors] = useState(initialColors);
  const [passages, setPassages] = useState(initialPassages);

  return (
    <div className="App">
      <NoteColorPicker colors={colors} setColorForNote={setColorForNote(colors, setColors)} />
      <div id="composition">
        <Notes passages={passages} colors={colors} />
        <NoteInput passages={passages} setPassages={setPassages} />
      </div>
    </div>
  );
}

export default App;
