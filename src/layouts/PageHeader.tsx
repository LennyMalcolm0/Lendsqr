const PageHeader = () => {
    return (  
        <div className="page-header">
            <div className="app-logo">
                <img src="images\lendsqr-logo.svg" alt="" />
            </div>
            <div className="main-content">
                <div className="container">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for anything" />
                        <span>
                            <img src="icons\pageHeader\search-icon.svg" alt="" />
                        </span>
                    </div>
                    <div className="user">
                        <span>Docs</span>
                        <img src="icons\pageHeader\notification-bell.svg" alt="" className="notification-bell" />
                        <div className="profile">
                            <img src="icons\pageHeader\profile-pic.svg" alt="" />
                            <div className="username">Adedeji</div>
                            <img src="icons\pageHeader\caret-down.svg" alt="" className="caret-down" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PageHeader;