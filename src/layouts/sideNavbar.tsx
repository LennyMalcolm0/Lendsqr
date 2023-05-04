import NavLinksCategory from "../components/navLinksCategory";
import { customerCategoryItems, businessCategoryItems, settingsCategoryItems } from "./data";

const SideNavbar = () => {
    return (  
        <div className="side-navbar">
            <div className="top-section">
                <div className="dropdown">
                    <img src="icons\sideNavbar\switch-organization.svg" alt="" />
                    <span>Switch Organization</span>
                    <img src="icons\sideNavbar\dropdown.svg" alt="" />
                </div>
                <div>
                    <img src="icons\sideNavbar\dashboard.svg" alt="" />
                    <span>Dashboard</span>
                </div>
            </div>

            <div className="nav-categories">
                <NavLinksCategory category="customers" navLinkDetails={customerCategoryItems} />
                <NavLinksCategory category="businesses" navLinkDetails={businessCategoryItems} />
                <NavLinksCategory category="settings" navLinkDetails={settingsCategoryItems} />
                </div>

            <div className="bottom-section">
                <div className="nav-item">
                    <img src="icons\sideNavbar\switch-organization.svg" alt="" />
                    <span>Logout</span>
                    <div className="dim-background"></div>
                </div>
                <div className="app-version">v1.2.0</div>
            </div>
        </div>
    );
}
 
export default SideNavbar;