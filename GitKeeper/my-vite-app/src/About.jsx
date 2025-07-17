function About() {
  const user = JSON.parse(localStorage.getItem("gitkeeperUser"));

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {user && (
        <>
          <h2>Welcome, {user.name || user.login} 👋</h2>
          <img
            src={user.avatar_url}
            alt="User avatar"
            width="100"
            style={{ borderRadius: "50%", marginBottom: "1rem" }}
          />
          <p>GitHub Username: {user.login}</p>
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
          <button onClick={() => window.location.href = "/repos"}>View My Repositories</button>
        </>
      )}

      <h3 style={{ marginTop: "2rem" }}>What Is GitKeeper? 📘</h3>
      <p style={{ maxWidth: "600px", margin: "auto" }}>
        GitKeeper is a powerful platform that helps developers automate commit validation,
        detect sensitive code leaks, and optimize their Git workflows—all while keeping security front and center.
      </p>

      <h3 style={{ marginTop: "2rem" }}>Watch Our Demo 🎥</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="GitKeeper Demo"
        allowFullScreen
        style={{ marginTop: "1rem" }}
      ></iframe>
    </div>
  );
}

export default About;