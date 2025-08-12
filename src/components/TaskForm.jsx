import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  //Create Single State variable, which is an object
  const [taskData, setTaskData] = useState({
    //Property Names and their Values
    task: "",
    status: "todo",
    tags: [], //when we select a tag, it will be added in here. and if a tag is already in this array, it will remove that tag
  });

  //check to see if the tag is available in the tags array or not
  const checkTag = (tag) => {
    //return true or false for that tag.
    //get each item, check if the item is equal to the tag
    return taskData.tags.some((item) => item === tag);
  };

  //selectTag function will run when a tag is selected
  const selectTag = (tag) => {
    //store the tags into the tags array
    //the some method will return true or false.
    //check the taskData tags to see if it exists in the array
    if (taskData.tags.some((item) => item === tag)) {
      //remove the tag from the array if it is available
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  //one single function for all form Fields on change event
  const handleChange = (e) => {
    //get the name and value attribute from event object.
    const { name, value } = e.target;
    //replace the current value of our task data object
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({ task: "", status: "todo", tags: [] }); //resets the tags
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          //pass the name properties to match the object properties
          type="text" // exactly the same in taskData Oject
          name="task" // exactly the same in taskData Oject
          value={taskData.task} //reset the input field after creating a task
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status} //reset the drop down after creating a task
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
