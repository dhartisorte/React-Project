const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/auth/github", async (req, res) => {
  const code = req.body.code;
  const CLIENT_ID = "YOUR_CLIENT_ID";
  const CLIENT_SECRET = "YOUR_CLIENT_SECRET";

  try {
    const tokenResponse = await axios.post(
      "https://github.com/login/oauth/access_token",
      {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: code,
      },
      { headers: { Accept: "application/json" } }
    );

    const accessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `token ${accessToken}` },
    });

    res.json(userResponse.data);
  } catch (err) {
    res.status(500).send("OAuth error");
  }
});

app.listen(3001, () => console.log("Backend running on port 3001"));