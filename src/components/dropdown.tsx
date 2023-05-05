import React, { useState, useEffect, useRef } from "react";

interface Props {
    defaultText?: string;
    dropdownItems: string[];
}
const Dropdown = ({defaultText, dropdownItems}: Props) => {
    const [ dropdownOpened, setDropdownOpened ] = useState<boolean>(false);

    const openDropdown = () => {
        setDropdownOpened(dropdownOpened === true ? false : true);
    }

    const setValue = (e: React.MouseEvent<HTMLElement>) => {
        const optionValue = e.target as HTMLElement;
        const dropDown = optionValue.closest(".drop-down") as HTMLElement;
        const currentValue = dropDown.querySelector(".current-value") as HTMLElement;

        currentValue.textContent = optionValue.textContent;
        setDropdownOpened(false);
    }

    // Close dropdown on clicking outside the dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const clickedOutsideElement = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpened(false);
            }
        };
    
        document.addEventListener("mousedown", clickedOutsideElement);
    
        return () => {
            document.removeEventListener("mousedown", clickedOutsideElement);
        };
    }, [dropdownRef]);

    return (  
        <div className="drop-down" ref={dropdownRef}>
            <div className="main-display" onClick={openDropdown}>
                <div className="current-value">{defaultText ? defaultText : "Select"}</div>
                <img src="/icons\userData\arrow.svg" alt="" className={`${dropdownOpened ? "rotate-up" : "rotate-down"}`} />
            </div>
            {dropdownOpened &&
                <div className="select-items">
                    {dropdownItems.map((item, index) => (
                        <div key={index} onClick={(e) => setValue(e)} className="dropdown-item">{item}</div>
                    ))}
                </div>
            }
        </div>
    );
}
 
export default Dropdown