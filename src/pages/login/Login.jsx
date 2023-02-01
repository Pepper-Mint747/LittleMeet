import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login">
        <div className="card">
          <div className="left">
            <h1>Hello World</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is,
            </p>
            <span>Don't you have an account</span>
            <button>Register</button>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
