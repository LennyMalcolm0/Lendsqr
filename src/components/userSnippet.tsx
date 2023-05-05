import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

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

    // Close menu on clicking outside the menu
    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const clickedOutsideElement = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenedMenu(false);
            }
        };
    
        document.addEventListener("mousedown", clickedOutsideElement);
    
        return () => {
            document.removeEventListener("mousedown", clickedOutsideElement);
        };
    }, [menuRef]);

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
                <img src="/icons\userData\details.svg" alt="" onClick={openMenu} />

                {openedMenu &&
                    <div className="menu" ref={menuRef}>
                        <Link to={`/user-details/${userId}`} className="item">
                            <img src="/icons\userData\eye.svg" alt="" />
                            <span>View Details</span>
                        </Link>
                        <div className="item">
                            <img src="/icons\userData\blacklist.svg" alt="" />
                            <span>Blacklist User</span>
                        </div>
                        <div className="item">
                            <img src="/icons\userData\activate.svg" alt="" />
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