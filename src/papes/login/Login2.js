import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
function Login2(props) {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [cookies, setCookie] = useCookies(['access_token', 'user_info', 'user_name']);
  async function handleLogin(e) {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const config = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
    };
    let url = (await 'http://api.thuematbang24h.com/api/auth/login');
    try {
      return axios(url, {
        method: "POST",
        data: data,
        config,
      })
        .then((res) => {
          if (res.status === 200) {
            setCookie("access_token", res.data.access_token, { path: "/" });
            setCookie("user_info", res.data.user, { path: "/" });
            setCookie("user_name", res.data.user.name);
            history.push("/");
          } else {
            alert("tài khoản hoặc mật khẩu không đúng");
          }
        })
        .catch((err) => {
          alert("tài khoản hoặc mật khẩu không đúng");
          console.log(err);
        });
    } catch (err) {
      alert("tài khoản hoặc mật khẩu không đúng");
      console.log(err);
    }
  }
  return (
    <div>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Admin</b>LTE</a>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={handleLogin} action="../../index3.html" method="post">
                <div className="input-group mb-3">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
              </label>
                    </div>
                  </div>
                  {/* /.col */}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                  </div>
                  {/* /.col */}
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2" /> Sign in using Facebook
        </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2" /> Sign in using Google+
        </a>
              </div>
              {/* /.social-auth-links */}
              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <Link to="/signup" className="text-center">Register a new membership</Link>
              </p>
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
        {/* /.login-box */}
        {/* jQuery */}
        {/* Bootstrap 4 */}
        {/* AdminLTE App */}

      </div>
  );
    </div>
  );
}

export default Login2;