"use client";
import React, { useState } from "react";
import { Roadmap } from "@/components/tools/Roadmap";
import Dropdown from "@/components/tools/Dropdown";
import { CheckCircle, Circle } from "lucide-react"; // Assuming these icons are available
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

// Define subtasks data
const subtasksData = {
  NodeJS: [
    { id: 1, title: "NodeJS Basics", completed: false },
    { id: 2, title: "RESTful APIs", completed: false },
    { id: 3, title: "Express Framework", completed: false },
    { id: 4, title: "Authentication & Authorization", completed: false },
    { id: 5, title: "Database Integration", completed: false },
  ],
  MongoDB: [
    { id: 1, title: "MongoDB Basics", completed: false },
    { id: 2, title: "Data Modeling", completed: false },
    { id: 3, title: "Queries and Aggregations", completed: false },
    { id: 4, title: "Indexing and Performance", completed: false },
    { id: 5, title: "Transactions", completed: false },
  ],
  GraphQL: [
    { id: 1, title: "GraphQL Basics", completed: false },
    { id: 2, title: "Schema Definition", completed: false },
    { id: 3, title: "Resolvers and Queries", completed: false },
    { id: 4, title: "Mutations and Subscriptions", completed: false },
    { id: 5, title: "Advanced GraphQL Concepts", completed: false },
  ],
  // Define subtasks for other backend technologies similarly...
};

export default function Roadmaps() {
  const [lessons, setLessons] = useState([
    {
      id: 1,
      order: 1,
      title: "NodeJS",
      subtasks: subtasksData.NodeJS,
      progress: 0,
    },
    {
      id: 2,
      order: 2,
      title: "MongoDB",
      subtasks: subtasksData.MongoDB,
      progress: 0,
    },
    {
      id: 3,
      order: 3,
      title: "GraphQL",
      subtasks: subtasksData.GraphQL,
      progress: 0,
    },
    // Define other backend lessons similarly...
  ]);

  const isCurrent = true;
  const isLocked = false;
  const initialProgress = 0;
  const [progress, setProgress] = useState(initialProgress);
  const [hoveredLesson, setHoveredLesson] = useState(null);

  const handleLessonHover = (lessonId) => {
    setHoveredLesson(lessonId);
  };

  const handleSubtaskClick = (lessonIndex, subtaskIndex) => {
    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].subtasks[subtaskIndex].completed =
      !updatedLessons[lessonIndex].subtasks[subtaskIndex].completed;

    // Calculate progress for the current lesson
    const completedSubtasks = updatedLessons[lessonIndex].subtasks.filter(
      (subtask) => subtask.completed
    ).length;
    const totalSubtasks = updatedLessons[lessonIndex].subtasks.length;
    const lessonProgress = (completedSubtasks / totalSubtasks) * 100;

    // Update the progress for the current lesson
    updatedLessons[lessonIndex].progress = lessonProgress;

    // Calculate total progress for all lessons
    const totalCompletedSubtasks = updatedLessons
      .flatMap((lesson) => lesson.subtasks)
      .filter((subtask) => subtask.completed).length;
    const totalTotalSubtasks = updatedLessons.flatMap(
      (lesson) => lesson.subtasks
    ).length;
    const totalProgress = (totalCompletedSubtasks / totalTotalSubtasks) * 100;
    setProgress(totalProgress);
    setLessons(updatedLessons);
  };

  return (
    <>
      <h1 className="text-5xl">Backend Roadmap</h1>
      <div>
        <div>
          <div className="flex items-center flex-col relative">
            {lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                onMouseEnter={() => handleLessonHover(lesson.id)}
                onMouseLeave={() => handleLessonHover(null)}
              >
                <Roadmap
                  id={lesson.id}
                  title={lesson.title}
                  index={index}
                  totalCount={lessons.length - 1}
                  current={isCurrent}
                  locked={isLocked}
                  percentage={lesson.progress}
                />
                {hoveredLesson === lesson.id && (
                  <div className="subtasks-container">
                    <ul>
                      {lesson.subtasks.map((subtask, subIndex) => (
                        <li
                          key={subtask.id}
                          onClick={() => handleSubtaskClick(index, subIndex)}
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          {subtask.completed ? (
                            <CheckCircle
                              style={{ marginRight: "5px", color: "green" }}
                            />
                          ) : (
                            <Circle style={{ marginRight: "5px" }} />
                          )}
                          <span
                            style={{
                              textDecoration: subtask.completed
                                ? "underline"
                                : "none",
                              color: subtask.completed ? "green" : "inherit",
                            }}
                          >
                            {subtask.title}
                          </span>
                          {/* Dropdown for resources */}

                          <Dropdown className="ml-auto">
                            {/* List of resources */}
                            <ul className="bg-white shadow-md rounded-md mt-1 py-1 px-2">
                              <li>Resource 1</li>
                              <li>Resource 2</li>
                              <li>Resource 3</li>
                            </ul>
                          </Dropdown>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
