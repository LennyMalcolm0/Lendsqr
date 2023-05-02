import { useState } from "react";
import FilterUsers from "./filterUsers";
import UserSnippet from "./userSnippet";

const UserData = () => {
    const headers = [ "organization", "Username", "Email", "Phone number", "Date joined", "Status" ]

    const [ filterOpened, setFilterOpened ] = useState<boolean>(false);

    const openFilter = () => {
        setFilterOpened(filterOpened === true ? false : true);
    }

    return (  
        <div className="user-data">
            <div className="table">
                <div className="headers">
                    {headers.map((value, index) => (
                        <div key={index} className="header">
                            <span>{value.toUpperCase()}</span>
                            <img src="src\assets\icons\userData\filter.svg" alt="" onClick={openFilter} />
                            {filterOpened ? 
                                <div className="filter-container">
                                    <FilterUsers />
                                </div> :
                                <></>
                            }
                        </div>
                    ))}
                </div>
                <div className="users-info">
                    <UserSnippet />
                </div>
            </div>
            <div className="controller">
                <div className="current-display">
                    <span>Showing</span>
                    <span className="filter">
                        <span>100</span>
                        <img src="src\assets\icons\userData\arrow.svg" alt="" />
                    </span>
                    <span>out of 100</span>
                </div>
                <div className="pagination">
                    <div><img src="src\assets\icons\userData\arrow.svg" alt="" /></div>
                    <a className="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">15</a>
                    <a href="#">16</a>
                    <div><img src="src\assets\icons\userData\arrow.svg" alt="" /></div>
                </div>
            </div>
        </div>
    );
}
 
export default UserData;