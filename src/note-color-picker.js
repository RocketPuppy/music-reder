import React, { useState } from "react";
import { SketchPicker } from "react-color";

const Note = ({ note, color, pickerOpen, onClick, onColorChange }) => {
  return (
    <div>
      <p
        className="note"
        onClick={onClick}
        style={{ color }}>
          {note.toUpperCase()}
      </p>
      {pickerOpen &&
        <React.Fragment>
          <div className="clickaway-overlay" onClick={onClick} />
          <div className="color-picker-frame">
            <SketchPicker
              color={color}
              width="300px"
              onChangeComplete={onColorChange}
            />
          </div>
        </React.Fragment>
      }
    </div>
  );
};

const NoteColorPicker = ({ colors, setColorForNote }) => {
  const [pickingNote, setPickingNote] = useState(null);

  return (
    <div id="note-color-picker">
      <h2>Colors</h2>
      {Object.entries(colors).sort().map(([note, color]) => (
        <Note
          key={note}
          note={note}
          color={color}
          pickerOpen={note === pickingNote}
          onClick={() => setPickingNote(note === pickingNote ? null : note)}
          onColorChange={(c) => setColorForNote(note, c.hex)}
        />
      ))}
    </div>
  );
};

export default NoteColorPicker;
