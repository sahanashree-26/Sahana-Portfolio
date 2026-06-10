function SkillUniverse() {
  const skills = [
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "MySQL",
    "PostgreSQL",
    "Docker",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "TypeScript",
    "REST APIs",
    "JWT Authentication",
    "Figma",
    "Machine Learning",
  ];

  return (
    <div className="page">
      <h1>Skill Universe </h1>
      <p>Technologies and tools I use to build impactful applications.</p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillUniverse;