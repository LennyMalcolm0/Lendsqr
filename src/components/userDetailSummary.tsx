const UserDetailSummary = () => {

    return (  
        <div className="user-detail-summary">
            <div className="profile">
                <div className="section-1">
                    <div className="avatar">
                        <img src="images\profile-pic.svg" alt="" />
                    </div>

                    <span>
                        <div className="name">Grace Effiom</div>
                        <div className="account-number">LSQFf587g90</div>
                    </span>
                </div>

                <div className="section-2">
                    <span className="tier">
                        <img src="icons\userData\tier.svg" alt="" />
                    </span>

                    <span>
                        <div className="account-balance">₦200,000.00</div>
                        <div className="bank-name">9912345678/Providus Bank</div>
                    </span>
                </div>
            </div>

            <div className="user-nav-links">
                <div className="nav-link nav-link-active">General Details</div>
                <div className="nav-link">Documents</div>
                <div className="nav-link">Bank Details</div>
                <div className="nav-link">Loans</div>
                <div className="nav-link">Savings</div>
                <div className="nav-link">App and System</div>
            </div>
        </div>
    );
}
 
export default UserDetailSummary;