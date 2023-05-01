interface Props {
    category: string;
    navLinkDetails: {
        imageSource: string;
        linkText: string;
    }[];
}
const NavLinksCategory = ({category, navLinkDetails}: Props) => {
    return (  
        <div>
            <div className="nav-items-category">{category.toUpperCase()}</div>

            <div className="nav-items">
                {navLinkDetails.map((link, index) => (
                    <div key={index} className={`nav-item ${link.linkText.toLowerCase() === "users" ? "nav-item-active" : ""}`}>
                        <img src={link.imageSource} alt="" />
                        <span>{link.linkText}</span>
                        <div className="dim-background"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default NavLinksCategory;