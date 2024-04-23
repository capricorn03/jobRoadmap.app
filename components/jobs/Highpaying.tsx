"use client";

import React, { useState } from "react";

const HighPayingJobsPage = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const jobs = [
    {
      title: "Software Engineer",
      averageSalary: "$120,000",
      experience: "3-5 years",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, tellus vitae gravida semper, tortor velit tincidunt purus, vitae eleifend eros elit a arcu.",
    },
    {
      title: "Data Scientist",
      averageSalary: "$130,000",
      experience: "4-6 years",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, tellus vitae gravida semper, tortor velit tincidunt purus, vitae eleifend eros elit a arcu.",
    },
    {
      title: "Product Manager",
      averageSalary: "$140,000",
      experience: "5-7 years",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, tellus vitae gravida semper, tortor velit tincidunt purus, vitae eleifend eros elit a arcu.",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={toggleDetails}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {jobs.map((job, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-6">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-600 mb-2">
                Average Salary: {job.averageSalary}
              </p>
              <p className="text-gray-600 mb-2">
                Experience Required: {job.experience}
              </p>
              <p className="text-gray-700">{job.details}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HighPayingJobsPage;
