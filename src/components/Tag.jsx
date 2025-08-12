import React from "react";

import "./Tag.css";

//destructure the props by implementing the selectTag function as the prop.

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    //how do we get the current selected tag? => set "tagName" as an arguement for the selectTag function. use arrow function so the function can run multiple times
    //add button type to keep the form from submitting when selecting a tab
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => selectTag(tagName)}
    >
      {tagName}
    </button>
  );
};

export default Tag;
