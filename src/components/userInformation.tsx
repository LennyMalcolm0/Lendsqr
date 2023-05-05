import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const UserInformation = () => {
    const {id} = useParams();

    const {data} = useFetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`);
    
    return (  
        <div className="user-information">
            {data &&
            <>
            <div className="section">
                <div className="section-name">Personal Information</div>
                <div className="section-contents">
                    <div>
                        <div className="item-name">Full Name</div>
                        <div className="item-value">{`${data.profile.firstName} ${data.profile.lastName}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Phone Number</div>
                        <div className="item-value">{`${data.profile.phoneNumber}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Email Address</div>
                        <div className="item-value">{`${data.email}`}</div>
                    </div>
                    <div>
                        <div className="item-name">BVN</div>
                        <div className="item-value">{`${data.profile.bvn}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Gender</div>
                        <div className="item-value">{`${data.profile.gender}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Address</div>
                        <div className="item-value">{`${data.profile.address}`}</div>
                    </div>
                </div>
                <div className="base-line"></div>
            </div>
            <div className="section">
                <div className="section-name">Education and Employment</div>
                <div className="section-contents">
                    <div>
                        <div className="item-name">level of education</div>
                        <div className="item-value">{`${data.education.level}`}</div>
                    </div>
                    <div>
                        <div className="item-name">employment status</div>
                        <div className="item-value">{`${data.education.employmentStatus}`}</div>
                    </div>
                    <div>
                        <div className="item-name">sector of employment</div>
                        <div className="item-value">{`${data.education.sector}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Duration of employment</div>
                        <div className="item-value">{`${data.education.duration}`}</div>
                    </div>
                    <div>
                        <div className="item-name">loan repayment</div>
                        <div className="item-value">{`${data.education.loanRepayment}`}</div>
                    </div>
                    <div>
                        <div className="item-name">office email</div>
                        <div className="item-value">{`${data.education.officeEmail}`}</div>
                    </div>
                    <div>
                        <div className="item-name">monthly income</div>
                        <div className="item-value">{`N${data.education.monthlyIncome[0]} - N${data.education.monthlyIncome[1]}`}</div>
                    </div>
                </div>
                <div className="base-line"></div>
            </div>
            <div className="section">
                <div className="section-name">Socials</div>
                <div className="section-contents">
                    <div>
                        <div className="item-name">Twitter</div>
                        <div className="item-value">{`${data.socials.twitter}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Facebook</div>
                        <div className="item-value">{`${data.socials.facebook}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Instagram</div>
                        <div className="item-value">{`${data.socials.instagram}`}</div>
                    </div>
                </div>
                <div className="base-line"></div>
            </div>
            <div className="section">
                <div className="section-name">Guarantor</div>
                <div className="section-contents">
                    <div>
                        <div className="item-name">Full Name</div>
                        <div className="item-value">{`${data.guarantor.firstName} ${data.guarantor.lastName}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Phone Number</div>
                        <div className="item-value">{`${data.guarantor.phoneNumber}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Gender</div>
                        <div className="item-value">{`${data.guarantor.gender}`}</div>
                    </div>
                    <div>
                        <div className="item-name">Address</div>
                        <div className="item-value">{`${data.guarantor.address}`}</div>
                    </div>
                </div>
            </div>
            </>
            }
        </div>
    );
}
 
export default UserInformation;