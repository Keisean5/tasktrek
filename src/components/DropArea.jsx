import React, { useState } from "react";
import "./DropArea.css";

const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);
  //when we drag our card on this section, then we make this state to true
  //when we drag from this section, we will make the state to false -> doesnt show
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? "drop_area" : "hide_drop"}
    >
      Drop Here
    </section>
  );
};

export default DropArea;
