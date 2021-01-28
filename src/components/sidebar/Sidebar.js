import React from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import * as ApiCaller from './../../helper/index';

function Sidebar(props) {
    const [cookies, removeCookie] = useCookies(["user_name"]);
    let history = useHistory();
    const token = cookies.access_token;
    function handleLogOut() {
        if (window.confirm("Bạn có chắc chắn muốn đăng xuất?")) {
            try {
                ApiCaller.handleGet("api/auth/logout", token)
                    .then((res) => {
                        removeCookie('access_token');
                        removeCookie('user_info');
                        removeCookie('user_name');
                        history.push('/login2')
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } catch (err) {
                alert(err);
            };
        }
    }
    return (
        <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="../../index3.html" className="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">HOME</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">{cookies.user_name}</a>
                            </div>
                        </div>


                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                                <li className="nav-header">EXAMPLES</li>
                                <li className="nav-item">
                                    <Link to="/listbooking" className="nav-link">
                                        <i className="nav-icon far fa-calendar-alt" />
                                        <p>
                                            List Booking
                                        </p>
                                    </Link>
                                </li>
                                <li onClick={handleLogOut} className="nav-item">
                                    <a className="nav-link">
                                        <i/>
                                        <p>
                                               Đăng xuất
                                        </p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
        </div>
    );
}

export default Sidebar;