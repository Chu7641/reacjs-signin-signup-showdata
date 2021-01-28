import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Signup(props) {
    let history = useHistory();
    const { register, handleSubmit, watch, errors } = useForm();
    async function handleSignup(data) {
console.log(data);
        const config = {
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
            },
        };
        let url = (await 'http://api.thuematbang24h.com/api/auth/signup');
        try {
            return (axios(url, {
                method: 'POST',
                data: data,
                config
            }))
                .then((res) => {
                    if (res.status === 201) {
                        history.push("/login");
                    }
                    else {
                        alert("Đăng kí không thành công");
                    }
                })
                .catch(err => {
                    console.log(errors);
                })

        } catch (error) {
            console.log(errors);
        }
    }
    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="register-logo">
                    <a href="../../index2.html"><b>Admin</b>LTE</a>
                </div>
                <div className="card">
                    <div className="card-body register-card-body">
                        <p className="login-box-msg">Register a new membership</p>
                        <form onSubmit={handleSubmit(handleSignup)} action="../../index.html" method="post">
                            <div className="input-group mb-3">
                                <input name='name' ref={register({ required: true, maxLength: 20 })} type="text" className="form-control" placeholder="Full name" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" name='email' ref={register} className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name='password' ref={register} className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" name='confirm_password' ref={register} className="form-control" placeholder="Retype password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="agreeTerms" name="terms" defaultValue="agree" />
                                        <label htmlFor="agreeTerms">
                                            I agree to the <a href="#">terms</a>
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Register</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>
                        <div className="social-auth-links text-center">
                            <p>- OR -</p>
                            <a href="#" className="btn btn-block btn-primary">
                                <i className="fab fa-facebook mr-2" />
          Sign up using Facebook
        </a>
                            <a href="#" className="btn btn-block btn-danger">
                                <i className="fab fa-google-plus mr-2" />
          Sign up using Google+
        </a>
                        </div>
                        <a href="login.html" className="text-center">I already have a membership</a>
                    </div>
                    {/* /.form-box */}
                </div>{/* /.card */}
            </div>
            {/* /.register-box */}
            {/* jQuery */}
            {/* Bootstrap 4 */}
            {/* AdminLTE App */}

        </div>
    );
}

export default Signup;