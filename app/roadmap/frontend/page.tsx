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
  HTML: [
    { id: 1, title: "HTML Basics", completed: false },
    { id: 2, title: "Semantic HTML", completed: false },
    { id: 3, title: "HTML Forms", completed: false },
    { id: 4, title: "HTML5 APIs", completed: false },
    { id: 5, title: "Accessibility", completed: false },
  ],
  CSS: [
    { id: 1, title: "CSS Basics", completed: false },
    { id: 2, title: "CSS Layouts", completed: false },
    { id: 3, title: "CSS Flexbox", completed: false },
    { id: 4, title: "CSS Grid", completed: false },
    { id: 5, title: "Responsive Design", completed: false },
  ],
  JavaScript: [
    { id: 1, title: "JavaScript Basics", completed: false },
    { id: 2, title: "DOM Manipulation", completed: false },
    { id: 3, title: "ES6+", completed: false },
    { id: 4, title: "Asynchronous JavaScript", completed: false },
    { id: 5, title: "JavaScript Frameworks", completed: false },
  ],
};

export default function Roadmaps(): JSX.Element {
  const [lessons, setLessons] = useState<Lesson[]>([
    {
      id: 1,
      order: 1,
      title: "HTML",
      subtasks: subtasksData.HTML,
      progress: 0,
      showSubtasks: false,
    },
    {
      id: 2,
      order: 2,
      title: "CSS",
      subtasks: subtasksData.CSS,
      progress: 0,
      showSubtasks: false,
    },
    {
      id: 3,
      order: 3,
      title: "JavaScript",
      subtasks: subtasksData.JavaScript,
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
      <h1 className="text-5xl">Frontend Roadmap</h1>
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

// import React, { useState } from "react";
// import { Roadmap } from "@/components/tools/Roadmap";
// import DropdownButton from "@/components/tools/Dropdown";
// import { CheckCircle, Circle } from "lucide-react";

//  const subtasksData = {
//   HTML: [
//     { id: 1, title: "HTML Basics", completed: false },
//     { id: 2, title: "Semantic HTML", completed: false },
//     { id: 3, title: "HTML Forms", completed: false },
//     { id: 4, title: "HTML Accessibility", completed: false },
//     { id: 5, title: "SEO for HTML", completed: false },
//   ],
//   CSS: [
//     { id: 1, title: "CSS Basics", completed: false },
//     { id: 2, title: "CSS Selectors", completed: false },
//     { id: 3, title: "CSS Box Model", completed: false },
//     { id: 4, title: "CSS Flexbox", completed: false },
//     { id: 5, title: "CSS Grid", completed: false },
//   ],
//   JavaScript: [
//     { id: 1, title: "JavaScript Basics", completed: false },
//     { id: 2, title: "DOM Manipulation", completed: false },
//     { id: 3, title: "Events and Event Handling", completed: false },
//     { id: 4, title: "Functions and Scope", completed: false },
//     { id: 5, title: "ES6 Features", completed: false },
//   ],
//   // Define subtasks for other lessons similarly...
// };

// export default function Roadmaps() {
//   const [lessons, setLessons] = useState([
//     {
//       id: 1,
//       order: 1,
//       title: "HTML",
//       subtasks: subtasksData.HTML,
//       progress: 0,
//     },
//     { id: 2, order: 2, title: "CSS", subtasks: subtasksData.CSS, progress: 0 },
//     {
//       id: 3,
//       order: 3,
//       title: "JavaScript",
//       subtasks: subtasksData.JavaScript,
//       progress: 0,
//     },
//     // Define other lessons similarly...
//   ]);

//   const [progress, setProgress] = useState(0);
//   const [hoveredLesson, setHoveredLesson] = useState<number | null>(null); // Specify the type as number or null

//   const handleLessonHover = (lessonId: number | null) => {
//     // Specify the type as number or null
//     setHoveredLesson(lessonId);
//   };

//   const handleSubtaskClick = (lessonIndex: number, subtaskIndex: number) => {
//     const updatedLessons = [...lessons];
//     updatedLessons[lessonIndex].subtasks[subtaskIndex].completed =
//       !updatedLessons[lessonIndex].subtasks[subtaskIndex].completed;

//     // Calculate progress for the current lesson
//     const completedSubtasks = updatedLessons[lessonIndex].subtasks.filter(
//       (subtask) => subtask.completed
//     ).length;
//     const totalSubtasks = updatedLessons[lessonIndex].subtasks.length;
//     const lessonProgress = (completedSubtasks / totalSubtasks) * 100;

//     // Update the progress for the current lesson
//     updatedLessons[lessonIndex].progress = lessonProgress;

//     // Calculate total progress for all lessons
//     const totalCompletedSubtasks = updatedLessons
//       .flatMap((lesson) => lesson.subtasks)
//       .filter((subtask) => subtask.completed).length;
//     const totalTotalSubtasks = updatedLessons.flatMap(
//       (lesson) => lesson.subtasks
//     ).length;
//     const totalProgress = (totalCompletedSubtasks / totalTotalSubtasks) * 100;
//     setProgress(totalProgress);
//     setLessons(updatedLessons);
//   };

//   return (
//     <>
//       <h1 className="text-5xl">Frontend Roadmap</h1>
//       <div>
//         <div>
//           <div className="flex items-center flex-col relative">
//             {lessons.map((lesson, index) => (
//               <div
//                 key={lesson.id}
//                 onMouseEnter={() => handleLessonHover(lesson.id)}
//                 onMouseLeave={() => handleLessonHover(null)}
//               >
//                 <Roadmap
//                   id={lesson.id}
//                   title={lesson.title}
//                   index={index}
//                   totalCount={lessons.length - 1}
//                   current={true}
//                   locked={false}
//                   percentage={lesson.progress}
//                 />
//                 {hoveredLesson === lesson.id && (
//                   <div className="subtasks-container">
//                     <ul>
//                       {lesson.subtasks.map((subtask, subIndex) => (
//                         <li
//                           key={subtask.id}
//                           onClick={() => handleSubtaskClick(index, subIndex)}
//                           style={{ display: "flex", alignItems: "center" }}
//                         >
//                           {subtask.completed ? (
//                             <CheckCircle
//                               style={{ marginRight: "5px", color: "green" }}
//                             />
//                           ) : (
//                             <Circle style={{ marginRight: "5px" }} />
//                           )}
//                           <span
//                             style={{
//                               textDecoration: subtask.completed
//                                 ? "underline"
//                                 : "none",
//                               color: subtask.completed ? "green" : "inherit",
//                             }}
//                           >
//                             {subtask.title}
//                           </span>
//                           {/* <DropdownButton className="ml-auto">
//                             <ul className="bg-white shadow-md rounded-md mt-1 py-1 px-2">
//                               <li>Resource 1</li>
//                               <li>Resource 2</li>
//                               <li>Resource 3</li>
//                             </ul>
//                           </DropdownButton> */}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // "use client";
// // import React, { useState } from "react";
// // import { Roadmap } from "@/components/tools/Roadmap";
// // import Dropdown from "@/components/tools/Dropdown";
// // import { CheckCircle, Circle } from "lucide-react"; // Assuming these icons are available
// // import {
// //   HoverCard,
// //   HoverCardContent,
// //   HoverCardTrigger,
// // } from "@/components/ui/hover-card";

// // // Define subtasks data
// // const subtasksData = {
// //   HTML: [
// //     { id: 1, title: "HTML Basics", completed: false },
// //     { id: 2, title: "Semantic HTML", completed: false },
// //     { id: 3, title: "HTML Forms", completed: false },
// //     { id: 4, title: "HTML Accessibility", completed: false },
// //     { id: 5, title: "SEO for HTML", completed: false },
// //   ],
// //   CSS: [
// //     { id: 1, title: "CSS Basics", completed: false },
// //     { id: 2, title: "CSS Selectors", completed: false },
// //     { id: 3, title: "CSS Box Model", completed: false },
// //     { id: 4, title: "CSS Flexbox", completed: false },
// //     { id: 5, title: "CSS Grid", completed: false },
// //   ],
// //   JavaScript: [
// //     { id: 1, title: "JavaScript Basics", completed: false },
// //     { id: 2, title: "DOM Manipulation", completed: false },
// //     { id: 3, title: "Events and Event Handling", completed: false },
// //     { id: 4, title: "Functions and Scope", completed: false },
// //     { id: 5, title: "ES6 Features", completed: false },
// //   ],
// //   // Define subtasks for other lessons similarly...
// // };

// // export default function Roadmaps() {
// //   const [lessons, setLessons] = useState([
// //     {
// //       id: 1,
// //       order: 1,
// //       title: "HTML",
// //       subtasks: subtasksData.HTML,
// //       progress: 0,
// //     },
// //     { id: 2, order: 2, title: "CSS", subtasks: subtasksData.CSS, progress: 0 },
// //     {
// //       id: 3,
// //       order: 3,
// //       title: "JavaScript",
// //       subtasks: subtasksData.JavaScript,
// //       progress: 0,
// //     },
// //     // Define other lessons similarly...
// //   ]);

// //   const isCurrent = true;
// //   const isLocked = false;
// //   const initialProgress = 0;
// //   const [progress, setProgress] = useState(initialProgress);
// //   const [hoveredLesson, setHoveredLesson] = useState(null);

// //   const handleLessonHover = (lessonId) => {
// //     setHoveredLesson(lessonId);
// //   };

// //   const handleSubtaskClick = (lessonIndex, subtaskIndex) => {
// //     const updatedLessons = [...lessons];
// //     updatedLessons[lessonIndex].subtasks[subtaskIndex].completed =
// //       !updatedLessons[lessonIndex].subtasks[subtaskIndex].completed;

// //     // Calculate progress for the current lesson
// //     const completedSubtasks = updatedLessons[lessonIndex].subtasks.filter(
// //       (subtask) => subtask.completed
// //     ).length;
// //     const totalSubtasks = updatedLessons[lessonIndex].subtasks.length;
// //     const lessonProgress = (completedSubtasks / totalSubtasks) * 100;

// //     // Update the progress for the current lesson
// //     updatedLessons[lessonIndex].progress = lessonProgress;

// //     // Calculate total progress for all lessons
// //     const totalCompletedSubtasks = updatedLessons
// //       .flatMap((lesson) => lesson.subtasks)
// //       .filter((subtask) => subtask.completed).length;
// //     const totalTotalSubtasks = updatedLessons.flatMap(
// //       (lesson) => lesson.subtasks
// //     ).length;
// //     const totalProgress = (totalCompletedSubtasks / totalTotalSubtasks) * 100;
// //     setProgress(totalProgress);
// //     setLessons(updatedLessons);
// //   };

// //   return (
// //     <>
// //       <h1 className="text-5xl">Frontend Roadmap</h1>
// //       <div>
// //         <div>
// //           <div className="flex items-center flex-col relative">
// //             {lessons.map((lesson, index) => (
// //               <div
// //                 key={lesson.id}
// //                 onMouseEnter={() => handleLessonHover(lesson.id)}
// //                 onMouseLeave={() => handleLessonHover(null)}
// //               >
// //                 <Roadmap
// //                   id={lesson.id}
// //                   title={lesson.title}
// //                   index={index}
// //                   totalCount={lessons.length - 1}
// //                   current={isCurrent}
// //                   locked={isLocked}
// //                   percentage={lesson.progress}
// //                 />
// //                 {hoveredLesson === lesson.id && (
// //                   <div className="subtasks-container">
// //                     <ul>
// //                       {lesson.subtasks.map((subtask, subIndex) => (
// //                         <li
// //                           key={subtask.id}
// //                           onClick={() => handleSubtaskClick(index, subIndex)}
// //                           style={{ display: "flex", alignItems: "center" }}
// //                         >
// //                           {subtask.completed ? (
// //                             <CheckCircle
// //                               style={{ marginRight: "5px", color: "green" }}
// //                             />
// //                           ) : (
// //                             <Circle style={{ marginRight: "5px" }} />
// //                           )}
// //                           <span
// //                             style={{
// //                               textDecoration: subtask.completed
// //                                 ? "underline"
// //                                 : "none",
// //                               color: subtask.completed ? "green" : "inherit",
// //                             }}
// //                           >
// //                             {subtask.title}
// //                           </span>
// //                           {/* Dropdown for resources */}

// //                           <Dropdown className="ml-auto">
// //                             {/* List of resources */}
// //                             <ul className="bg-white shadow-md rounded-md mt-1 py-1 px-2">
// //                               <li>Resource 1</li>
// //                               <li>Resource 2</li>
// //                               <li>Resource 3</li>
// //                             </ul>
// //                           </Dropdown>
// //                         </li>
// //                       ))}
// //                     </ul>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }
// //
