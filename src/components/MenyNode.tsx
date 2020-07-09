import React from 'react';
import {Menu} from "../types/Menu";

const MenuNode = (starship: Menu) => {
    const [showResults, setShowResults] = React.useState(false)

    function printNodeName(val: Menu) {
        return () => {
            console.log(val.title)
            setShowResults(!showResults)
        };
    }

    return (
        <>
            <div>
                <button
                    onClick={printNodeName(starship)}
                    className="subnavbtn">  {starship.title}
                </button>
                {showResults ? <div>
                    {starship.nodes.map(nod => (
                        <div>{nod}</div>
                    ))}
                </div> : null}

            </div>
        </>
    );
};

export default MenuNode;
