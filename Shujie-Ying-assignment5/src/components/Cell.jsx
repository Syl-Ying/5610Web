import { useState } from "react";

const Cell = ({ handleToggle }) => {
    const [isOn, setIsOn] = useState(false);

    const toggleCell = () => {
        setIsOn(!isOn);
        handleToggle(!isOn);
    };

    return (
        <div 
            className="cell" 
            style={{
                width:'100px',
                height:'100px',
                border:'1px solid grey',
                backgroundColor: isOn ? 'black' : 'white',
            }}
            onClick={toggleCell}
        >
        </div>
    );
}

export default Cell;