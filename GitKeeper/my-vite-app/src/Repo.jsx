import { useEffect, useState } from "react";

function Repo() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem("gitkeeperUser"));

  useEffect(() => {
    if (!user || !user.token) return;

    fetch(`http://localhost:3001/user/repos?token=${user.token}`)
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch repos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "4rem" }}>Loading Repositories...</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your GitHub Repositories 📦</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {repos.map((repo) => (
          <li key={repo.id} style={{ marginBottom: "1rem" }}>
            <strong>{repo.name}</strong>
            <p>{repo.description || "No description"}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Repo;