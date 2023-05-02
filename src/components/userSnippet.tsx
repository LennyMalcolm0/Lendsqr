const UserSnippet = () => {
    const openMenu = (e: React.MouseEvent<HTMLElement>) => {
        const menuImage = e.target as HTMLElement;
        const userMenu = menuImage.nextElementSibling as HTMLElement;

        if (userMenu) {
            userMenu.style.display = `${userMenu.style.display === "block" ? "none" : "block"}`
        }
    }

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
                <img src="src\assets\icons\userData\details.svg" alt="" onClick={(e) => openMenu(e)} />

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