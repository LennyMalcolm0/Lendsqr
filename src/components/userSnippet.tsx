const UserSnippet = () => {
    return (  
        <div className="user-snippet">
            <div>Lendsqr</div>
            <div>Adedeji</div>
            <div>adedeji@lendsqr.com</div>
            <div>08078903721</div>
            <div>08078903721</div>
            <div>
                <span className="indicator">
                    <span className="background"></span>
                    <span className="status">Inactive</span>
                </span>
                <img src="src\assets\icons\userData\details.svg" alt="" />

                <div className="menu">
                    <div className="item">
                        <img src="src\assets\icons\userData\eye.svg" alt="" />
                        <span>View Details</span>
                    </div>
                    <div className="item">
                        <img src="src\assets\icons\userData\blacklist.svg" alt="" />
                        <span>Blacklist User</span>
                    </div>
                    <div className="item">
                        <img src="src\assets\icons\userData\activate.svg" alt="" />
                        <span>Activate User</span>
                    </div>
                </div>
            </div>
            <div className="baseline"></div>
        </div>
    );
}
 
export default UserSnippet;