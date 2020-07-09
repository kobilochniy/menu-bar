import React from 'react';
import useNodeService from "../services/useNodeService";
import MenuNode from "./MenyNode";

const MenyBar = () => {
    const service = useNodeService();
    return (
        <>
            <div className="navbar">
                {service.map(val => (
                    <div className="subnav">
                        <MenuNode title={val.title} nodes={val.nodes}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default MenyBar;
