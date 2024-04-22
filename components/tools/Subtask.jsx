import React, { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Task 1",
      subtasks: [
        { name: "Subtask 1", completed: false },
        { name: "Subtask 2", completed: false },
        { name: "Subtask 3", completed: false },
      ],
    },
    {
      id: 2,
      name: "Task 2",
      subtasks: [
        { name: "Subtask 1", completed: false },
        { name: "Subtask 2", completed: false },
      ],
    },
    {
      id: 3,
      name: "Task 3",
      subtasks: [
        { name: "Subtask 1", completed: false },
        { name: "Subtask 2", completed: false },
        { name: "Subtask 3", completed: false },
        { name: "Subtask 4", completed: false },
      ],
    },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleTaskClick = (taskId) => {
    if (selectedTask === taskId) {
      setSelectedTask(null);
      setProgress(0);
    } else {
      setSelectedTask(taskId);
      setProgress(0);
    }
  };

  const handleSubtaskClick = (subtaskIndex) => {
    const currentTask = tasks[selectedTask - 1];
    const updatedSubtasks = [...currentTask.subtasks];
    updatedSubtasks[subtaskIndex].completed =
      !updatedSubtasks[subtaskIndex].completed;

    const totalSubtasks = updatedSubtasks.length;
    const completedSubtasks = updatedSubtasks.filter(
      (subtask) => subtask.completed
    ).length;
    const taskProgress = (completedSubtasks / totalSubtasks) * 100;

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[selectedTask - 1] = {
        ...currentTask,
        subtasks: updatedSubtasks,
      };
      return updatedTasks;
    });
    setProgress(taskProgress);
  };

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div key={task.id}>
          <div onClick={() => handleTaskClick(task.id)}>
            Task {task.id}: {task.name}
          </div>
          {selectedTask === task.id && (
            <div>
              {task.subtasks.map((subtask, index) => (
                <div
                  key={index}
                  onClick={() => handleSubtaskClick(index)}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {subtask.completed ? (
                    <CheckCircle style={{ marginRight: "5px" }} />
                  ) : (
                    <Circle style={{ marginRight: "5px" }} />
                  )}
                  <span
                    style={{
                      textDecoration: subtask.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {subtask.name}
                  </span>
                </div>
              ))}
              <div>
                Progress: {progress}%
                <div
                  style={{
                    width: `${progress}%`,
                    backgroundColor: "lightblue",
                    height: "10px",
                    marginTop: "5px",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
