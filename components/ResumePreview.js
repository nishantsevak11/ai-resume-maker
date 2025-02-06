"use client"; // This is crucial!

import React, { useEffect, useState } from 'react';

const ResumePreview = ({ resumeData }) => {
  const [previewHTML, setPreviewHTML] = useState("");

  useEffect(() => {
    const generateResumeHTML = (data) => {
      return `
        <div className="mt-4 border p-4 rounded-lg bg-gray-100 w-full">
          <h2 className="text-lg font-bold mb-2">Resume Preview:</h2>
          <div className="p-4 bg-white border rounded">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-2xl font-bold mb-2">${data.full_name || "Your Name"}</h1>
              <div className="mb-2">
                <p>${data.email || "Your Email"}</p>
                <p>${data.phone_number || "Your Phone"}</p>
              </div>

              ${data.summary ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Summary</h2><p>${data.summary}</p></div>` : ""}
              ${data.objective ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Objective</h2><p>${data.objective}</p></div>` : ""}

              ${data.education && data.education.length > 0
                ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Education</h2><ul>${data.education
                    .map(
                      (edu) =>
                        `<li key=${edu.id || Math.random()} className="mb-2">
                          <p className="font-bold">${edu.degree} - ${edu.university}</p>
                          <p>${edu.graduation_year}</p>
                        </li>`
                    )
                    .join("")}</ul></div>`
                : ""}

              ${data.experience && data.experience.length > 0
                ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Experience</h2><ul>${data.experience
                    .map(
                      (exp) =>
                        `<li key=${exp.id || Math.random()} className="mb-2">
                          <p className="font-bold">${exp.job_title} - ${exp.company}</p>
                          <p>${exp.dates}</p>
                          <p>${exp.responsibilities}</p>
                        </li>`
                    )
                    .join("")}</ul></div>`
                : ""}

              ${data.projects && data.projects.length > 0
                ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Projects</h2><ul>${data.projects
                    .map(
                      (project) =>
                        `<li key=${project.id || Math.random()} className="mb-2">
                          <p className="font-bold">${project.title}</p>
                          <p>${project.description}</p>
                          <p>${project.technologies}</p>
                        </li>`
                    )
                    .join("")}</ul></div>`
                : ""}

              ${data.skills && data.skills.length > 0
                ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Skills</h2><ul className="list-disc pl-5">${data.skills.map((skill, index) => `<li key=${index}>${skill}</li>`).join("")}</ul></div>`
                : ""}

              ${data.certifications && data.certifications.length > 0
                ? `<div className="mb-4"><h2 className="text-xl font-bold mb-1">Certifications</h2><ul className="list-disc pl-5">${data.certifications.map((cert, index) => `<li key=${index}>${cert}</li>`).join("")}</ul></div>`
                : ""}
            </div>
          </div>
        </div>
      `;
    };

    const newHTML = generateResumeHTML(resumeData);
    setPreviewHTML(newHTML);
  }, [resumeData]);

  return <div dangerouslySetInnerHTML={{ __html: previewHTML }} />;
};

export default ResumePreview;