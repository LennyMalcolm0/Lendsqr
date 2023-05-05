const UsersSummary = () => {
    const dataSummary = [
        {
            imageSource: "/icons/summary/users.svg",
            title: "Users",
            value: "2,453",
        },
        {
            imageSource: "/icons/summary/active-users.svg",
            title: "Active Users",
            value: "2,453",
        },
        {
            imageSource: "/icons/summary/users-loans.svg",
            title: "Users with Loans",
            value: "12,453",
        },
        {
            imageSource: "/icons/summary/users-savings.svg",
            title: "Users with Savings",
            value: "102,453",
        },
    ];

    return (  
        <div className="users-summary">
            {dataSummary.map((summary, index) => (
                <div key={index} className="card">
                    <div>
                        <div className="image-container">
                            <img src={summary.imageSource} alt="" />
                            <div className="background"></div>
                        </div>
                        <div className="title">{summary.title.toUpperCase()}</div>
                    </div>
                    <div className="value">{summary.value}</div>
                </div>
            ))}
        </div>
    );
}
 
export default UsersSummary;