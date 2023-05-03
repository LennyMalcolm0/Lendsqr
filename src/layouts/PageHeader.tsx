const PageHeader = () => {
    return (  
        <div className="page-header">
            <div className="app-logo">
                <img src="images\lendsqr-logo.svg" />
            </div>

            <div className="search-bar smaller-screens">
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

            <img src="icons\pageHeader\menu-button.svg" className="menu-button" />
        </div>
    );
}
 
export default PageHeader;