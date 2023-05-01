interface Props {
    dropdownItems: string[];
}
const Dropdown = ({dropdownItems}: Props) => {
    return (  
        <div className="drop-down">
            <div className="main-display">
                <div className="selected-text">Select</div>
                <img src="src\assets\icons\userData\arrow.svg" alt="" />
            </div>
            <div className="select-items">
                {dropdownItems.map((item, index) => (
                    <div key={index} className="dropdown-item">
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Dropdown