"use client";
import React, { useState, ChangeEvent } from "react";
import jsPDF from "jspdf";

interface Details {
  name: string;
  email: string;
  phone: string;
  github: string;
  achievements: string;
  education: string;
  experience: string;
  skills: string;
  project: string;
}

function ResumeBuilder() {
  const [details, setDetails] = useState<Details>({
    name: "",
    email: "",
    phone: "",
    github: "",
    achievements: "",
    education: "",
    experience: "",
    skills: "",
    project: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setFont("Arial", "bold");
    doc.text(` ${details.name}`, 80, 30);
    doc.setFont("Arial", "normal");
    doc.setFontSize(10);
    doc.text(` ${details.email}|${details.phone}|${details.github}`, 60, 35);
    doc.line(20, 44, 190, 44);
    doc.setFontSize(13);
    doc.setFont("Arial", "bold");
    doc.text(`Skills`, 20, 48);
    doc.setFontSize(12);
    doc.setFont("Arial", "normal");
    doc.text(` ${details.skills}`, 20, 55);
    doc.setFontSize(13);
    doc.setFont("Arial", "bold");
    doc.text(`Experience`, 20, 68);
    doc.setFontSize(12);
    doc.setFont("Arial", "normal");
    doc.setFontSize(13);
    doc.text(`${details.experience}`, 20, 75);

    doc.setFontSize(13);
    doc.setFont("Arial", "bold");
    doc.text(`Education`, 20, 88);
    doc.setFontSize(12);
    doc.setFont("Arial", "normal");
    doc.setFontSize(13);
    doc.text(`${details.education}`, 20, 95);

    doc.setFontSize(13);
    doc.setFont("Arial", "bold");
    doc.text(`Project`, 20, 108);
    doc.setFontSize(12);
    doc.setFont("Arial", "normal");
    doc.setFontSize(13);
    doc.text(`${details.project}`, 20, 115);

    doc.setFontSize(13);
    doc.setFont("Arial", "bold");
    doc.text(`Achievements`, 20, 128);
    doc.setFontSize(12);
    doc.setFont("Arial", "normal");
    doc.setFontSize(13);
    doc.text(`${details.achievements}`, 20, 135);
    doc.save("resume.pdf");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 className="text-2xl m-5">Resume Builder</h2>
      <form style={{ marginBottom: "20px" }}>
        {" "}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Name:</label>
          <input
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Name"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={details.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Email"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={details.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Phone"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Github Profile:
          </label>
          <input
            type="text"
            name="github"
            value={details.github}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Github Profile"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Education:
          </label>
          <input
            name="education"
            value={details.education}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Education"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Skills:
          </label>
          <textarea
            name="skills"
            value={details.skills}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Skills"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Project:
          </label>
          <input
            type="text"
            name="project"
            value={details.project}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Projects"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Experience:
          </label>
          <textarea
            name="experience"
            value={details.experience}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Experience"
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Achievements:
          </label>
          <textarea
            name="achievements"
            value={details.achievements}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            placeholder="Achievements"
          />
        </div>
      </form>
      <button
        onClick={handleDownload}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      <div
        style={{
          marginTop: "20px",
          border: "1px solid #ccc",
          padding: "20px",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "20px",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
          }}
        >
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Preview</h3>
          <p>
            <strong>Name:</strong> {details.name}
          </p>
          <p>
            <strong>Email:</strong> {details.email}
          </p>
          <p>
            <strong>Phone:</strong> {details.phone}
          </p>
          <p>
            <strong>Github Profile:</strong> {details.github}
          </p>
          <p>
            <strong>Education:</strong> {details.education}
          </p>
          <p>
            <strong>Experience:</strong> {details.experience}
          </p>
          <p>
            <strong>Skills:</strong> {details.skills}
          </p>
          <p>
            <strong>Project:</strong> {details.project}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResumeBuilder;
