import React from 'react';
import "./HeadString.css";
import LeftPanel from '../../LeftPanel/LeftPanel';

function HeadString() {
    const otherItems=[{"name":"New Connection","link":"/newConnection"}]
    return (
        <div>
             <LeftPanel listContent={otherItems}/>
             <div className="main-panel">
                 <h2>Configure Your Dataset</h2>
                 
             </div>
        </div>
    )
}

export default HeadString
