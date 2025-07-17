const CLIENT_ID = "Ov23lin7wsZ5FwIKbxxq";

function App() {
  const loginWithGitHub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user`
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Welcome to GitKeeper 🚀</h1>
      <p>Your smarter way to secure, validate, and manage Git commits.</p>
      <button onClick={loginWithGitHub}>Login with GitHub</button>
    </div>
  );
}

export default App;