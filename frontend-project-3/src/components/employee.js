import '../util/bootstrap/css/bootstrap-responsive.min.css';
import '../util/bootstrap/css/bootstrap.min.css';
// import '../util/bootstrap/js/bootstrap.min.js';
// import '../util/bootstrap/img'
import '../util/bootstrap.3.0.0/content/Content/bootstrap.css';
import '../util/bootstrap.3.0.0/content/Content/bootstrap.min.css';
// import '../util/bootstrap.3.0.0/content/Scripts'
// import '../util/bootstrap.3.0.0/content/fonts'
import '../util/Content/bootstrap.css';
import '../util/Content/bootstrap.min.css';
import '../util/Content/Site.css';
import '../util/css/theme.css';
// import '../util/fonts'
import '../util/images/icons/css/font-awesome.css';
// import '../util/images/jquery-ui'
// import '../util/jQuery.1.10.2/Content'
// import '../util/jQuery.1.10.2/Tools'
import axios from 'axios';
import React, { useState,useEffect } from "react";

const Employee = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchEmployee = async() => {
            try {
                let response = await axios.get('http://localhost:7777/api/employee');
                setItems(response.data.data);
        
            } catch (error) {
                console.log('Error fetching data : ',error);
            }
        }
        fetchEmployee();
    },[])
    
    
    // dataEmployee = res.data.data;

    return (
        <div>
            <div className="navbar navbar-fixed-top">
                <div className="navbar-inner">
                    <div className="container">
                        <a className="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
                            <i className="icon-reorder shaded"></i>
                        </a><a className="brand" href="~/">Admin </a>
                        <div className="nav-collapse collapse navbar-inverse-collapse">
                            <ul className="nav nav-icons">
                                <li className="active"><a href="#"><i className="icon-envelope"></i></a></li>
                                <li><a href="#"><i className="icon-eye-open"></i></a></li>
                                <li><a href="#"><i className="icon-bar-chart"></i></a></li>
                            </ul>
                            <form className="navbar-search pull-left input-append" action="#">
                                {/* <input type="text" className="span3"> */}
                                <input type="text" className="span3"></input>
                                <button className="btn" type="button">
                                    <i className="icon-search"></i>
                                </button>
                            </form>
                            <ul className="nav pull-right">
                                <li className="nav-user dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="~/images/user.png" className="nav-avatar" />
                                        <b className="caret"></b>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Your Profile</a></li>
                                        <li><a href="#">Edit Profile</a></li>
                                        <li><a href="#">Account Settings</a></li>
                                        <li className="divider"></li>
                                        <li><a href="#">Logout</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="span2">
                            <div className="sidebar">
                                <ul className="widget widget-menu unstyled">
                                    <li className="active">
                                        <a href="/">
                                            <i className="menu-icon icon-dashboard"></i>Dashboard
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/employee"><i className="menu-icon icon-bullhorn"></i>Employee List </a>
                                    </li>
                                    <li>
                                        <a href="~/BenefitPlans">
                                            <i className="menu-icon icon-tasks"></i>Benefit Plans
                                        </a>
                                    </li>
                                    <li>
                                        <a href="~/JobHistory">
                                            <i className="menu-icon icon-inbox"></i>Job History
                                        </a>
                                    </li>
                                </ul>
                                <ul className="widget widget-menu unstyled">
                                    <li>
                                        <a className="collapsed" data-toggle="collapse" href="#togglePages">
                                            <i className="menu-icon icon-cog">
                                            </i><i className="icon-chevron-down pull-right"></i><i
                                                className="icon-chevron-up pull-right">
                                            </i>More Pages
                                        </a>
                                        <ul id="togglePages" className="collapse unstyled">
                                            <li><a href="#"><i className="icon-inbox"></i>Login </a></li>
                                            <li><a href="#"><i className="icon-inbox"></i>Profile </a></li>
                                            <li><a href="#"><i className="icon-inbox"></i>All Users </a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#"><i className="menu-icon icon-signout"></i>Logout </a></li>
                                </ul>
                            </div>
                            {/* <!--/.sidebar--> */}
                        </div>
                        {/* <!--/.span3--> */}

                        {/* <!--/.span9--> */}
                        <div className="span9">
                            <div class="module">
                                <div class="module-head">
                                    <h3>Employee -
                                        <a href="/"> create</a>
                                    </h3>
                                </div>
                                <div class="module-body table">
                                    <table cellpadding="0" cellspacing="0" border="0"
                                        class="datatable-1 table table-bordered table-striped	 display" width="100%">
                                        <thead>
                                            <tr>
                                                <th>
                                                    First Name
                                                </th>
                                                <th>
                                                    Last Name
                                                </th>
                                                <th>
                                                    VactionDays
                                                </th>
                                                <th>
                                                    paidToDate
                                                </th>
                                                <th>
                                                    paidLastYear
                                                </th>
                                                <th>
                                                    payRate
                                                </th>
                                                <th>
                                                    payRateId
                                                </th>
                                                <th></th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {console.log('alooooo : ',items)}
                                            { items && items.map((item,index) => (
                                                     <tr class="odd gradeX">
                                                        <td key={index}>
                                                            {item.firstName}
                                                        </td>
                                                        <td key={index}>
                                                            {item.lastName}
                                                        </td>
                                                        <td key={index}>
                                                            {item.vacationDays}
                                                        </td>
                                                        <td key={index}>
                                                            {item.paidToDate}
                                                        </td>
                                                        <td key={index} class="center">
                                                            {item.paidLastYear}
                                                        </td>
                                                        <td key={index} class="center">
                                                            {item.payRate}
                                                        </td>
                                                        <td key={index} class="center">
                                                            {item.payRateId}
                                                        </td>
                                                        <td key={index}>

                                                            Edit | Detail | Delete
                                                        </td>
                                                    </tr>
                                            ))}
                                            
                                            


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--/.container--> */}

            </div>
            <div className="footer">
                <div className="container">
                    <b className="copyright">&copy; 2014 Admin - DaoNguyen </b>All rights reserved.
                </div>
            </div>
        </div>
    );
}

export default Employee;