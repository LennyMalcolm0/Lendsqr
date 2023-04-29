const PageHeader = () => {
    return (  
        <div className="page-header">
            <div className="app-logo">
                <img src="" alt="" />
            </div>
            <div className="main-content">
                <div className="search-bar">
                    <input type="text" placeholder="Search for anything" />
                    <span>
                        <img src="" alt="" />
                    </span>
                </div>
                <div>
                    <span>Docs</span>
                    <img src="" alt="" />
                    <div className="profile">
                        <img src="" alt="" />
                        <div className="username">Adedeji</div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PageHeader;