import React from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import MainPanel from '../MainPanel/MainPanel';
import Welcome from './Welcome';


function OpeningPage() {
    const sideListItems=[{"name":"New Connection","link":"/newConnection"}];

    return (
        <div>
            <div>
            <LeftPanel listContent={sideListItems}/>
            </div>
        <div>
            <MainPanel props={<Welcome/>}/>
            </div>   
        </div>
    )
}

export default OpeningPage;
