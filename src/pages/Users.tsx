import UsersSummary from "../components/usersSummary";
import UserData from "../components/userData";
import PageHeader from "../layouts/pageHeader";
import SideNavbar from "../layouts/sideNavbar";
import { useState, useEffect } from 'react';

const UsersPage = () => {
    return ( 
        <div className="dashboard">
            <PageHeader  />
            <div className="page-body">
                <SideNavbar />
                <div className="main-content">
                    <div className="container">
                        <div className="search-bar sm-search-bar">
                            <input type="text" placeholder="Search for anything" />
                            <span>
                                <img src="icons\pageHeader\search-icon.svg" />
                            </span>
                        </div>
                        <h1>Users</h1>
                        <UsersSummary />
                        <UserData />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UsersPage;