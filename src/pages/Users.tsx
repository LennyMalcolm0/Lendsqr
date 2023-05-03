import UsersSummary from "../components/usersSummary";
import UserData from "../components/userData";
import PageHeader from "../layouts/pageHeader";
import SideNavbar from "../layouts/sideNavbar";

const UsersPage = () => {
    return ( 
        <div className="dashboard">
            <PageHeader />
            <div className="page-body">
                <SideNavbar />
                <div className="main-content">
                    <div className="container">
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