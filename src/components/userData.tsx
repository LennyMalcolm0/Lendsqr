/* eslint-disable react-hooks/exhaustive-deps */
import FilterUsers from "./filterUsers";
import UserSnippet from "./userSnippet";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useRef, useState } from "react";

const UserData = () => {
    const headers = [ "organization", "Username", "Email", "Phone number", "Date joined", "Status" ];

    const openFilter = (e: React.MouseEvent<HTMLElement>) => {
        const filterImage = e.target as HTMLElement;
        const filterContainer = filterImage.nextElementSibling as HTMLElement;

        if (filterContainer) {
            filterContainer.style.display = `${filterContainer.style.display === "block" ? "none" : "block"}`
        }
    };

    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);
    const {data} = useFetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');

    if (data) {
        localStorage.setItem("usersData", JSON.stringify(data));
    }

    const [retrievedUserData, setRetrievedData] = useState<any>();
    useEffect(() => {
        const dataJson = localStorage.getItem("usersData");
        if (dataJson !== null) {
            setRetrievedData(JSON.parse(dataJson));
        }
    }, []);

    // Function for formatting unreadable dates from usersData API to one that is readable
    function formatDate(createdAt: string) {
        const createdAtDate = new Date(createdAt);
        const formattedDate = createdAtDate.toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });

        return formattedDate.toString();
    }
    
    return (  
        <div className="users-data">
            <div className="table-container">
                <div className="table">
                    <div className="headers">
                        {headers.map((value, index) => (
                            <div key={index} className="header">
                                <span>{value.toUpperCase()}</span>
                                <img src="/icons\userData\filter.svg" alt="" onClick={openFilter} />
                                <div className="filter-container">
                                    <FilterUsers />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="users-info">
                        {retrievedUserData &&
                            retrievedUserData
                                .filter((user: any) => user.id >= start && user.id <= end) 
                                .map((user: any) => (
                                    <div key={user.id}>
                                        <UserSnippet 
                                            userId={user.id}
                                            organization={user.orgName}
                                            username={user.userName}
                                            email={user.email}
                                            phoneNumber={user.profile.phoneNumber}
                                            dateJoined={formatDate(user.createdAt)}
                                        />
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>
            
            <div className="controller">
                <div className="current-display">
                    <span>Showing</span>
                    <span className="dropdown">
                        <span>10</span>
                        <img src="/icons\userData\arrow.svg" alt="" />
                    </span>
                    <span>out of 100</span>
                </div>
                <div className="pagination">
                    <div><img src="/icons\userData\arrow.svg" alt="" /></div>
                    <span className="active">1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>...</span>
                    <span>9</span>
                    <span>10</span>
                    <div><img src="/icons\userData\arrow.svg" alt="" /></div>
                </div>
            </div>
        </div>
    );
}
 
export default UserData;