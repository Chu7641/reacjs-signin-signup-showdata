import React from 'react';
import Validate from '../../helper/Validate';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function Main(props) {
    return (
        <div>
        <Validate/>
          <div>
            <div className="wrapper">
                <Header/>
                <Sidebar />
                <div className="content-wrapper">
                    <section className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1>Blank Page</h1>
                                </div>
                            </div>
                        </div>{/* /.container-fluid */}
                    </section>
                    {/* Main content */}
                    <section className="content">
                       {props.children}
                    </section>
                    {/* /.content */}
                </div>
               <Footer/>
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
            </div>
            {/* ./wrapper */}
            {/* jQuery */}
            {/* Bootstrap 4 */}
            {/* AdminLTE App */}
            {/* AdminLTE for demo purposes */}
        </div>
      </div>

    
    );
}

export default Main;