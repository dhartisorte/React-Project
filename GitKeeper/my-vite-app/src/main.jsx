// const express = require("express");
// const axios = require("axios");
// const cors = require("cors");

// const app = express();
// app.use(cors({ origin: "http://localhost:5173" }));
// app.use(express.json());

// const CLIENT_ID = "Ov23lin7wsZ5FwIKbxxq";         // ← your GitHub OAuth Client ID
// const CLIENT_SECRET = "96de23659ed7421a60e7bd7a2897c58ffef0ea14";       // ← your GitHub OAuth Client Secret

// // Step 1: Exchange code for access token
// app.post("/auth/github", async (req, res) => {
//   const { code } = req.body;

//   try {
//     const tokenRes = await axios.post(
//       "https://github.com/login/oauth/access_token",
//       {
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         code,
//       },
//       {
//         headers: { Accept: "application/json" },
//       }
//     );

//     const accessToken = tokenRes.data.access_token;

//     const userRes = await axios.get("https://api.github.com/user", {
//       headers: { Authorization: `token ${accessToken}` },
//     });

//     const userData = userRes.data;
//     userData.token = accessToken; // attach token so frontend can fetch repos

//     res.json(userData);
//   } catch (err) {
//     console.error("OAuth failed:", err.response?.data || err.message);
//     res.status(500).send("GitHub OAuth failed");
//   }
// });

// // Step 2: Fetch user's GitHub repositories
// app.get("/user/repos", async (req, res) => {
//   const { token } = req.query;

//   try {
//     const repoRes = await axios.get("https://api.github.com/user/repos", {
//       headers: { Authorization: `token ${token}` },
//     });

//     res.json(repoRes.data);
//   } catch (err) {
//     console.error("Repo fetch failed:", err.response?.data || err.message);
//     res.status(500).send("Failed to fetch repositories");
//   }
// });

// app.listen(3001, () => {
//   console.log("Backend server running at http://localhost:3001");
// });

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GitHubCallback from "./GitHubCallback";
import About from "./About";
import Repo from "./Repo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth/github/callback" element={<GitHubCallback />} />
        <Route path="/about" element={<About />} />
        <Route path="/repos" element={<Repo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);