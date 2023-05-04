import UsersSummary from "../components/usersSummary";
import UserData from "../components/userData";
import PageHeader from "../layouts/PageHeader";
import SideNavbar from "../layouts/sideNavbar";

const UsersPage = () => {
    return ( 
        <div className="dashboard">
            <PageHeader  />
            <div className="page-body">
                <SideNavbar />
                <div className="main-content">
                    <div className="container">
                        <div className="search-bar sm-search-bar">
                            <input type="text" placeholder="Search for anything" />
                            <span>
                                <img src="http://localhost:5173/icons\pageHeader\search-icon.svg" />
                            </span>
                        </div>
                        <h1>Users</h1>
                        <UsersSummary />
                        <UserData />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default UsersPage;