const HeaderAndDashboard = () => {
    return ( 
        <div className="dashboard">
             <div className="page-header">
                <div className="app-logo">
                    <img src="images\lendsqr-logo.svg" />
                </div>

                <div className="search-bar sm-search-bar">
                    <input type="text" placeholder="Search for anything" />
                    <span>
                        <img src="icons\pageHeader\search-icon.svg" />
                    </span>
                </div>

                <div className="content">
                    <div className="content-container">
                        <div className="search-bar">
                            <input type="text" placeholder="Search for anything" />
                            <span>
                                <img src="icons\pageHeader\search-icon.svg" />
                            </span>
                        </div>
                        <div className="user">
                            <span>Docs</span>
                            <img src="icons\pageHeader\notification-bell.svg" className="notification-bell" />
                            <div className="profile">
                                <div className="avatar">
                                    <img src="images\profile-pic.svg" />
                                </div>
                                <div className="username">Adedeji</div>
                                <img src="icons\pageHeader\caret-down.svg" className="caret-down" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="menu-buttons">
                    {!menuOpened ? 
                        <img src="icons\pageHeader\open-menu.svg" onClick={openMenu} /> :
                        <img src="icons\pageHeader\close-menu.svg" onClick={closeMenu} />
                    }
                </div> */}
            </div>
            <main>
                <div className="side-navbar">
                    <div className="top-section">
                        <div className="dropdown">
                            <img src="icons\sideNavbar\switch-organization.svg" alt="" />
                            <span>Swith Organization</span>
                            <img src="icons\sideNavbar\dropdown.svg" alt="" />
                        </div>
                        <div>
                            <img src="icons\sideNavbar\dashboard.svg" alt="" />
                            <span>Dashboard</span>
                        </div>
                    </div>

                    <div className="nav-categories">
                        <NavLinksCategory category="customers" navLinkDetails={customerCategoryItems} />
                        <NavLinksCategory category="businesses" navLinkDetails={businessCategoryItems} />
                        <NavLinksCategory category="settings" navLinkDetails={settingsCategoryItems} />
                        </div>

                    <div className="bottom-section">
                        <div className="nav-item">
                            <img src="icons\sideNavbar\switch-organization.svg" alt="" />
                            <span>Logout</span>
                            <div className="dim-background"></div>
                        </div>
                        <div className="app-version">v1.2.0</div>
                    </div>
                </div>
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
            </main>
        </div>
     );
}
 
export default HeaderAndDashboard;