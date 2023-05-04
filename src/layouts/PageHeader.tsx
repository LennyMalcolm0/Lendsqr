import React, { useState } from "react";

const PageHeader = () => {

    return (  
        <div className="page-header">
            <div className="app-logo">
                <img src="http://localhost:5173/images\lendsqr-logo.svg" />
            </div>

            <div className="search-bar sm-search-bar">
                <input type="text" placeholder="Search for anything" />
                <span>
                    <img src="http://localhost:5173/icons\pageHeader\search-icon.svg" />
                </span>
            </div>

            <div className="content">
                <div className="content-container">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for anything" />
                        <span>
                            <img src="http://localhost:5173/icons\pageHeader\search-icon.svg" />
                        </span>
                    </div>
                    <div className="user">
                        <span>Docs</span>
                        <img src="http://localhost:5173/icons\pageHeader\notification-bell.svg" className="notification-bell" />
                        <div className="profile">
                            <div className="avatar">
                                <img src="http://localhost:5173/images\profile-pic.svg" />
                            </div>
                            <div className="username">Adedeji</div>
                            <img src="http://localhost:5173/icons\pageHeader\caret-down.svg" className="caret-down" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PageHeader;