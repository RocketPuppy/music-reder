import React, { useState, useEffect } from 'react';
import './App.css';
import NoteColorPicker from "./note-color-picker";
import Notes from "./notes";
import NoteInput from "./note-input";
import store from "store";

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
const storedColors = store.get('colors')

// [passages][chords][notes]
const initialPassages = [
  [["A", "C", "G"],
  ["E", "A"]],
  [["D", "C"],
  ["E", "A"]],
];
const storedPassages = store.get('passages');

const setColorForNote = (colors, setColors) => (note, color) =>
  setColors({ ...colors, [note]: color });

function App() {
  const [colors, setColors] = useState(storedColors || initialColors);
  const [passages, setPassages] = useState(storedPassages || initialPassages);

  useEffect(() => {
    store.set('colors', colors);
  }, [colors]);

  useEffect(() => {
    store.set('passages', passages);
  }, [passages]);

  return (
    <div className="App">
      <NoteColorPicker colors={colors} setColorForNote={setColorForNote(colors, setColors)} />
      <div id="composition">
        <Notes passages={passages} colors={colors} />
        <NoteInput passages={passages} setPassages={setPassages} />
      </div>
      <div id="footer">
        <button onClick={() => {
          store.clearAll();
          setColors(initialColors);
          setPassages(initialPassages);
        }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
