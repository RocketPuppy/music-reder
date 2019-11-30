import React from "react";

const Notes = ({ notes, colors }) => (
  <p id="notes">
    {notes.map((note, index) => (
      <span key={index} className="note" style={{ color: colors[note] }}>{note}</span>
    ))}
  </p>
);

export default Notes;
