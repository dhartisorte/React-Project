import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function GitHubCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const codeParam = new URLSearchParams(window.location.search).get("code");

    if (codeParam) {
      fetch("http://localhost:3001/auth/github", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: codeParam }),
      })
        .then((res) => res.json())
        .then((userData) => {
          localStorage.setItem("gitkeeperUser", JSON.stringify(userData));
          navigate("/about");
        })
        .catch((err) => {
          console.error("GitHub auth failed:", err);
          alert("Login failed");
        });
    }
  }, [navigate]);

  return <h2 style={{ textAlign: "center", marginTop: "4rem" }}>Authenticating with GitHub...</h2>;
}

export default GitHubCallback;