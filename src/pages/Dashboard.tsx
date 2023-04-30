import PageHeader from "../layouts/PageHeader";
import SideNavbar from '../layouts/sideNavbar';

const Dashboard = () => {
    return (  
        <div>
            <PageHeader />
            <div className="">
                <SideNavbar />
            </div>
        </div>
    );
}
 
export default Dashboard;