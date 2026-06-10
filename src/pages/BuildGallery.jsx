function BuildGallery() {
  const projects = [
    {
      title: "AI-Based Fraud Detection System",
      description:
        "A machine learning-powered fraud detection platform using Random Forest and Streamlit with Smart Freeze security protocol for instant risk mitigation.",
      github:
        "https://github.com/sahanashree-26/smart-freeze-fraud-detection.git",
      demo: "#",
    },

    {
      title: "File Upload Portal",
      description:
        "A Google Drive-inspired file management platform with secure file uploads, folder organization, authentication, and cloud deployment.",
      github: "#",
      demo: "https://file-upload-portal-snowy.vercel.app/",
    },

    {
      title: "AI Spend Optimization Dashboard",
      description:
        "A SaaS-style dashboard that analyzes AI tool subscriptions, generates savings recommendations, and provides downloadable audit reports.",
      github: "#",
      demo: "https://credex-ai-spend-audit-murex.vercel.app/",
    },
  ];

  return (
    <div className="page">
      <h1>Build Gallery </h1>

      <p>
        A collection of projects showcasing my expertise in full-stack
        development, machine learning, UI/UX design, and software engineering.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>

            <p>{project.description}</p>

            <div className="project-buttons">
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuildGallery;