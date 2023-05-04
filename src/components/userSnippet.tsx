import { Link } from "react-router-dom";
import { useState } from 'react';

interface Props {
    organization: string;
    username: string;
    email: string;
    phoneNumber: string;
    dateJoined: string;
    userId: number;
}
const UserSnippet = ({organization, username, email, phoneNumber, dateJoined, userId}: Props) => {
    const [openedMenu, setOpenedMenu] = useState(false);

    const openMenu = () => {
        setOpenedMenu(openedMenu === true ? false : true);
    };

    return (  
        <div className="user-snippet">
            <div className="category">{organization}</div>
            <div className="category">{username}</div>
            <div className="category">{email}</div>
            <div className="category">{phoneNumber}</div>
            <div className="category">{dateJoined}</div>
            <div className="category">
                <span className="indicator">
                    <span className="background"></span>
                    <span className="status">Inactive</span>
                </span>
                <img src="http://localhost:5173/icons\userData\details.svg" alt="" onClick={openMenu} />

                {openedMenu &&
                    <div className="menu">
                        <Link to={`/user-details/${userId}`} className="item">
                            <img src="http://localhost:5173/icons\userData\eye.svg" alt="" />
                            <span>View Details</span>
                        </Link>
                        <div className="item">
                            <img src="http://localhost:5173/icons\userData\blacklist.svg" alt="" />
                            <span>Blacklist User</span>
                        </div>
                        <div className="item">
                            <img src="http://localhost:5173/icons\userData\activate.svg" alt="" />
                            <span>Activate User</span>
                        </div>
                    </div>
                }
            </div>
            <div className="base-line"></div>
        </div>
    );
}
 
export default UserSnippet;