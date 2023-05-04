import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const UserDetailSummary = () => {
    const {id} = useParams();

    const {data} = useFetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);

    return (  
        <div className="user-detail-summary">
            {data &&
            <div className="profile">
                <div className="section-1">
                    <div className="avatar">
                        <img src={data.profile.avatar} alt="" />
                    </div>

                    <span>
                        <div className="name">{`${data.profile.firstName} ${data.profile.lastName}`}</div>
                        <div className="account-number">{`${data.accountNumber}`}</div>
                    </span>
                </div>

                <div className="section-2">
                    <span className="tier">
                        <img src="http://localhost:5173/icons\userData\tier.svg" alt="" />
                    </span>

                    <span>
                        <div className="account-balance">{`N${data.accountBalance}`}</div>
                        <div className="bank-name">9912345678/Providus Bank</div>
                    </span>
                </div>
            </div>
            }

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