import React from "react";

const Notes = ({ passages, colors }) => (
  <div id="notes">
    {passages.map((passage, index) => (
      <div key={`${passage}-${index}`} className="passage">
        {passage.map((chord, index) => (
          <p key={`${chord}-${index}`} className="chord">
            {chord.map((note, index) => (
              <span key={`${note}-${index}`} className="note" style={{ color: colors[note] }}>{note}</span>
            ))}
          </p>
        ))}
      </div>
    ))}
  </div>
);

export default Notes;
