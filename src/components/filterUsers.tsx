import Dropdown from "./dropdown";

const FilterUsers = () => {
    const organizations = ["org1", "org2"];
    const status = ["Pending", "Active", "Inactive", "Blacklisted"];

    return (  
        <div className="filter">
            <label>Organization</label>
            <Dropdown dropdownItems={organizations} />

            <label>Username</label>
            <input type="text" />

            <label>Email</label>
            <input type="text" />

            <label>Date</label>
            <input type="date" />

            <label>Phone Number</label>
            <input type="number" />

            <label>Status</label>
            <Dropdown dropdownItems={status} />

            <div className="buttons">
                <button>Reset</button>
                <button>Filter</button>
            </div>
        </div>
    );
}
 
export default FilterUsers;