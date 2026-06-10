function SocialBridge() {
  return (
    <div className="page">
      <h1>Social Bridge 🌐</h1>
      <p>My professional and development profiles in one place.</p>

      <div className="connect-grid">
        <a href="https://www.linkedin.com/in/sahanashree" target="_blank" rel="noreferrer">
          <h2>LinkedIn</h2>
          <p>Professional profile and career updates</p>
        </a>

        <a href="https://github.com/sahanashree-26" target="_blank" rel="noreferrer">
          <h2>GitHub</h2>
          <p>Projects, repositories and code work</p>
        </a>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <h2>Resume</h2>
          <p>View my latest resume</p>
        </a>
      </div>
    </div>
  );
}

export default SocialBridge;