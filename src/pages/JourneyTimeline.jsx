function JourneyTimeline() {
  const timeline = [
    {
      year: "2025",
      title: "DevOps Intern",
      place: "Bics Global",
      detail: "Worked with Docker, Git and workflow version control.",
    },
    {
      year: "2025",
      title: "Python for Data Science",
      place: "NPTEL Certification",
      detail: "Completed certification focused on Python and data science basics.",
    },
    {
      year: "2025 - 2026",
      title: "UI/UX Developer Intern",
      place: "RootPro Technologies",
      detail: "Designed responsive UI using Figma and Tailwind CSS.",
    },
    {
      year: "2026",
      title: "Community Manager Intern",
      place: "Velozity Global Solutions Pvt Ltd",
      detail: "Handled communication, product advocacy and user engagement.",
    },
    {
      year: "2026 - Present",
      title: "Web Developer Intern",
      place: "Auro Creative Studio",
      detail: "Building full-stack web applications using React, Node.js and PostgreSQL.",
    },
  ];

  return (
    <div className="page">
      <h1>Journey Timeline ⏳</h1>
      <p>My learning path, internships, certifications and growth milestones.</p>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-card" key={index}>
            <span>{item.year}</span>
            <h2>{item.title}</h2>
            <h3>{item.place}</h3>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JourneyTimeline;