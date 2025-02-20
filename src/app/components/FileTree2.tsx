// IMPORT/USE SECTION
'use client'; //Tells React to render it client side
import React, { useState } from "react"; //import React Libaries
import SmallButton from "./templates/SmallButton"; // Importing my SmallButton  component

//GENERAL LOGIC SECTION


//EXPORT SECTION
const FileTree: React.FC = () => { //Building the algorithm which will contain the final return statment which gets exported

    const [isActive, setIsActive] = useState(false); // State to track if the button is active

    const handleClick = () => {
    setIsActive((prev) => !prev); // Toggle the active state
        console.log("Button clicked. Active state is now:", !isActive);
    };

    return ( //everything inside here gets exported from the component to what ever wants to use it
    <SmallButton //calling our SmallButton Component and declaring the values for its props 
        id="test"
        onClick={handleClick} // Pass the click handler
        isActive={isActive}
    >
        n
    </SmallButton>
    );

}

export default FileTree; //exporting the algorithms return statement