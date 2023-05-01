const Summary = () => {
    const dataSummary = [
        {
            imageSource: "src/assets/icons/summary/users.svg",
            title: "Users",
            value: "2,453",
        },
        {
            imageSource: "src/assets/icons/summary/active-users.svg",
            title: "Active Users",
            value: "2,453",
        },
        {
            imageSource: "src/assets/icons/summary/users-loans.svg",
            title: "Users with Loans",
            value: "12,453",
        },
        {
            imageSource: "src/assets/icons/summary/users-savings.svg",
            title: "Users with Savings",
            value: "102,453",
        },
    ];

    return (  
        <div className="summary">
            {dataSummary.map((summary, index) => (
                <div key={index} className="card">
                    <div className="image-container">
                        <img src={summary.imageSource} alt="" />
                        <div className="background"></div>
                    </div>
                    <div className="title">{summary.title.toUpperCase()}</div>
                    <div className="value">{summary.value}</div>
                </div>
            ))}
        </div>
    );
}
 
export default Summary;