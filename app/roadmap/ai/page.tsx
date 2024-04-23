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
  "Machine Learning": [
    { id: 1, title: "Introduction to ML", completed: false },
    { id: 2, title: "Supervised Learning", completed: false },
    { id: 3, title: "Unsupervised Learning", completed: false },
    { id: 4, title: "Neural Networks", completed: false },
    { id: 5, title: "Deep Learning", completed: false },
  ],
  "Natural Language Processing": [
    { id: 1, title: "Tokenization", completed: false },
    { id: 2, title: "Named Entity Recognition", completed: false },
    { id: 3, title: "Text Classification", completed: false },
    { id: 4, title: "Word Embeddings", completed: false },
    { id: 5, title: "Sequence-to-Sequence Models", completed: false },
  ],
  "Computer Vision": [
    { id: 1, title: "Image Processing", completed: false },
    { id: 2, title: "Feature Extraction", completed: false },
    { id: 3, title: "Object Detection", completed: false },
    { id: 4, title: "Convolutional Neural Networks", completed: false },
    { id: 5, title: "Image Segmentation", completed: false },
  ],
};

export default function Roadmaps(): JSX.Element {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      order: 1,
      title: "Machine Learning",
      subtasks: subtasksData["Machine Learning"],
      progress: 0,
      showSubtasks: false,
    },
    {
      id: 2,
      order: 2,
      title: "Natural Language Processing",
      subtasks: subtasksData["Natural Language Processing"],
      progress: 0,
      showSubtasks: false,
    },
    {
      id: 3,
      order: 3,
      title: "Computer Vision",
      subtasks: subtasksData["Computer Vision"],
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
      <h1 className="text-5xl">AI Roadmap</h1>
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
