function Login(type) {
  function handleLoggin(type) {
    window.open("http://localhost:3000/api/auth/" + type, "_self");
  }

  return (
    <div>
      <p>Login</p>
      <button onClick={() => handleLoggin("google")}>google</button>
      <button onClick={() => handleLoggin("facebook")}>facebook</button>
    </div>
  );
}

export default Login;
