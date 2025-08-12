import React from "react";

import "./Tag.css";

//destructure the props by implementing the selectTag function as the prop.

const Tag = ({ tagName, selectTag }) => {
  return (
    //how do we get the current selected tag? => set "tagName" as an arguement for the selectTag function. use arrow function so the function can run multiple times
    //add button type to keep the form from submitting when selecting a tab
    <button type="button" className="tag" onClick={() => selectTag(tagName)}>
      {tagName}
    </button>
  );
};

export default Tag;
