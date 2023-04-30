const PageHeader = () => {
    return (  
        <div className="page-header">
            <div className="app-logo">
                <img src="src\assets\images\lendsqr-logo.svg" alt="" />
            </div>
            <div className="main-content">
                <div className="wrapper">
                    <div className="search-bar">
                        <input type="text" placeholder="Search for anything" />
                        <span>
                            <img src="src\assets\icons\pageHeader\search-icon.svg" alt="" />
                        </span>
                    </div>
                    <div className="user">
                        <span>Docs</span>
                        <img src="src\assets\icons\pageHeader\notification-bell.svg" alt="" className="notification-bell" />
                        <div className="profile">
                            <img src="src\assets\icons\pageHeader\profile-pic.svg" alt="" />
                            <div className="username">Adedeji</div>
                            <img src="src\assets\icons\pageHeader\dropdown.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PageHeader;