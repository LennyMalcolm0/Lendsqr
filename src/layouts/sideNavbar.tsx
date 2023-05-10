import { Link } from "react-router-dom";
import NavLinksCategory from "../components/navLinksCategory";
import { customerCategoryItems, businessCategoryItems, settingsCategoryItems } from "./data";
import { useState } from "react";

const SideNavbar = () => {
    const [menuOpened, setMenuOpened] = useState("null");

    const openMenu = () => {
        setMenuOpened("true");
    };
    const closeMenu = () => {
        setMenuOpened("false");
    };

    return (  
        <>
         <div className="user-page-header">
            <div className="app-logo">
                <img src="/images\lendsqr-logo.svg" />
            </div>

            <div className="menu-buttons">
                {menuOpened === "null" && <img src="/icons\pageHeader\open-menu.svg" onClick={openMenu} />}
                {menuOpened === "false" && <img src="/icons\pageHeader\open-menu.svg" onClick={openMenu} />}
                {menuOpened === "true" && <img src="/icons\pageHeader\close-menu.svg" onClick={closeMenu} />}
            </div>
        </div>
        
        <div className={`side-navbar ${menuOpened === "true" && "open-sidebar"} ${menuOpened === "false" && "close-sidebar"}`}>
            <div className="user-mobile">
                <div className="side-1">
                    <div className="avatar">
                        <img src="/images\profile-pic.svg" />
                    </div>
                    <div className="username">Adedeji</div>
                    <img src="/icons\pageHeader\caret-down.svg" className="caret-down" />
                </div>
                <div className="side-2">
                    <span>Docs</span>
                    <img src="/icons\pageHeader\notification-bell.svg" className="notification-bell" />
                </div>
            </div>
            
            <div className="top-section">
                <div className="dropdown">
                    <img src="/icons\sideNavbar\switch-organization.svg" alt="" />
                    <span>Switch Organization</span>
                    <img src="/icons\sideNavbar\dropdown.svg" alt="" />
                </div>
                <div>
                    <img src="/icons\sideNavbar\dashboard.svg" alt="" />
                    <span>Dashboard</span>
                </div>
            </div>

            <div className="nav-categories">
                <NavLinksCategory category="customers" navLinkDetails={customerCategoryItems} />
                <NavLinksCategory category="businesses" navLinkDetails={businessCategoryItems} />
                <NavLinksCategory category="settings" navLinkDetails={settingsCategoryItems} />
            </div>

            <div className="bottom-section">
                <Link to="/login" className="nav-item">
                    <img src="/icons\sideNavbar\switch-organization.svg" alt="" />
                    <span>Logout</span>
                    <div className="dim-background"></div>
                </Link>
                <div className="app-version">v1.2.0</div>
            </div>
        </div>
        </>
    );
}
 
export default SideNavbar;