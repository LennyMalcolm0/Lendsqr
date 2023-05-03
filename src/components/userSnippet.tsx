import { Link } from "react-router-dom";

interface Props {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    userId: number;
}
const UserSnippet = ({organization, username, email, phoneNumber, dateJoined, userId}: Props) => {

    const openMenu = (e: React.MouseEvent<HTMLElement>) => {
        const menuImage = e.target as HTMLElement;
        const userMenu = menuImage.nextElementSibling as HTMLElement;

        if (userMenu) {
            userMenu.style.display = `${userMenu.style.display === "block" ? "none" : "block"}`
        }
    };

    return (  
        <div className="user-snippet">
            <div>{organization}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
            <div>{dateJoined}</div>
            <div>
                <span className="indicator">
                    <span className="background"></span>
                    <span className="status">Inactive</span>
                </span>
                <img src="icons\userData\details.svg" alt="" onClick={(e) => openMenu(e)} />

                <div className="menu">
                    <Link to={`/user-details/${userId}`} className="item">
                        <img src="icons\userData\eye.svg" alt="" />
                        <span>View Details</span>
                    </Link>
                    <div className="item">
                        <img src="icons\userData\blacklist.svg" alt="" />
                        <span>Blacklist User</span>
                    </div>
                    <div className="item">
                        <img src="icons\userData\activate.svg" alt="" />
                        <span>Activate User</span>
                    </div>
                </div>
            </div>
            <div className="base-line"></div>
        </div>
    );
}
 
export default UserSnippet;