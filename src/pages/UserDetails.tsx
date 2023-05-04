import { useNavigate } from "react-router-dom";
import UserDetailSummary from "../components/userDetailSummary";
import UserInformation from "../components/userInformation";
import PageHeader from "../layouts/pageHeader";
import SideNavbar from "../layouts/sideNavbar";

const UserDetailsPage = () => {
    const navigateHistory = useNavigate();

    return (  
        <div className="dashboard">
            <PageHeader />
            <div className="page-body">
                <SideNavbar />
                <div className="main-content">
                    <div className="container">

                        <div className="user-details">
                            <div className="go-back" onClick={() => navigateHistory(-1)}>
                                <img src="http://localhost:5173/icons\userData\go-back.svg" alt="" />
                                <span>Back to Users</span>
                            </div>
                            <div className="page-heading">
                                <h1>User Details</h1>
                                <div>
                                    <button>BLACKLIST USER</button>
                                    <button>ACTIVATE USER</button>
                                </div>
                            </div>
                            <UserDetailSummary />
                            <UserInformation />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default UserDetailsPage;