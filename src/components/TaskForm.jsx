import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  //Create Single State variable, which is an object
  const [taskData, setTaskData] = useState({
    //Property Names and their Values
    task: "",
    status: "todo",
  });

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
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          //pass the name properties to match the object properties
          type="text" // exactly the same in taskData Oject
          name="task" // exactly the same in taskData Oject
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select
              name="status"
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
