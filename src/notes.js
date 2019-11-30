import React from "react";

const Notes = ({ notes, colors }) => (
  <p id="notes">
    {notes.map((note) => (
      <span className="note" style={{ color: colors[note] }}>{note}</span>
    ))}
  </p>
);

export default Notes;
