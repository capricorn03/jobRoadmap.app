"use client";
import React, { useState } from "react";
import { Roadmap } from "@/components/tools/Roadmap";
import { CheckCircle, Circle } from "lucide-react";

interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}

interface Lesson {
  id: number;
  order: number;
  title: string;
  subtasks: Subtask[];
  progress: number;
  showSubtasks: boolean;
}

const subtasksData: Record<string, Subtask[]> = {
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
};

export default function Roadmaps(): JSX.Element {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      order: 1,
      title: "NodeJS",
      subtasks: subtasksData.NodeJS,
      progress: 0,
      showSubtasks: false,
    },
    {
      id: 2,
      order: 2,
      title: "MongoDB",
      subtasks: subtasksData.MongoDB,
      progress: 0,
      showSubtasks: false,
    },
    {
      id: 3,
      order: 3,
      title: "GraphQL",
      subtasks: subtasksData.GraphQL,
      progress: 0,
      showSubtasks: false,
    },
  ]);

  const [progress, setProgress] = useState<number>(0);

  const handleLessonClick = (lessonIndex: number): void => {
    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].showSubtasks =
      !updatedLessons[lessonIndex].showSubtasks;
    setLessons(updatedLessons);
  };

  const handleSubtaskClick = (
    lessonIndex: number,
    subtaskIndex: number
  ): void => {
    const updatedLessons = [...lessons];
    updatedLessons[lessonIndex].subtasks[subtaskIndex].completed =
      !updatedLessons[lessonIndex].subtasks[subtaskIndex].completed;

    const completedSubtasks = updatedLessons[lessonIndex].subtasks.filter(
      (subtask) => subtask.completed
    ).length;
    const totalSubtasks = updatedLessons[lessonIndex].subtasks.length;
    const lessonProgress = (completedSubtasks / totalSubtasks) * 100;

    updatedLessons[lessonIndex].progress = lessonProgress;

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
              <div key={lesson.id}>
                <div onClick={() => handleLessonClick(index)}>
                  <Roadmap
                    id={lesson.id}
                    title={lesson.title}
                    index={index}
                    totalCount={lessons.length - 1}
                    current={true}
                    locked={false}
                    percentage={lesson.progress}
                  />
                </div>
                {lesson.showSubtasks && (
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
