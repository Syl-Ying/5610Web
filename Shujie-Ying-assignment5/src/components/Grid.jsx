import { useState } from "react";
import Cell from "./Cell";

const Grid = () => {
    const [count, setCount] = useState(0);

    const handleToggle = (isOn) => {
        setCount(count + (isOn ? 1 : -1));
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <div style={{ display: 'flex', flexWrap:'wrap', width: '220px'}}>
                <Cell handleToggle={handleToggle}/>
                <Cell handleToggle={handleToggle}/>
                <Cell handleToggle={handleToggle}/>
                <Cell handleToggle={handleToggle}/>
            </div>
        </div>
    );
}

export default Grid;
