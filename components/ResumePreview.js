// ResumePreview.js
import React from "react"

export default function ResumePreview({ resumeData }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">{resumeData.name}</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p>Email: {resumeData.email}</p>
          <p>Phone: {resumeData.phone}</p>
          <p>LinkedIn: {resumeData.linkedin}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Summary</h2>
          <p>{resumeData.summary}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Experience</h2>
          {resumeData.experience?.map((exp, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold">{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Education</h2>
          {resumeData.education?.map((edu, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold">{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.duration}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            {resumeData.skills?.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}