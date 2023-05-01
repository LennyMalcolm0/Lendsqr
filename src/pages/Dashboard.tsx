
import Summary from '../components/summary';
import PageHeader from '../layouts/pageHeader';
import SideNavbar from '../layouts/sideNavbar';

const Dashboard = () => {
    return (  
        <div className="dashboard">
            <PageHeader />
            <div className="page-body">
                <SideNavbar />
                <div className="main-content">
                    <div className="container">
                        <h1>Users</h1>
                        <Summary />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;