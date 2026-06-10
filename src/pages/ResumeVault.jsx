function ResumeVault() {
  return (
    <div className="page">
      <h1>Resume Vault 📄</h1>
      <p>View, download, and explore my professional profile.</p>

      <div className="resume-box">
        <iframe src="/resume.pdf" title="Sahana Resume"></iframe>

        <div className="resume-actions">
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>

          <a href="/resume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeVault;