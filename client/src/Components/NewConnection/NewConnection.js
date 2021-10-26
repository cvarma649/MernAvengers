import React from 'react';
import "./NewConnection.css";
import LeftPanel from '../LeftPanel/LeftPanel';
import MainPanel from '../MainPanel/MainPanel';
import ConnectDB from './ConnectDB';

function NewConnection() {
    const otherItems=[{"name":"New Connection","link":"/newConnection"}]
    return (
        <div>
            <LeftPanel listContent={otherItems}/>
            <MainPanel props={<ConnectDB/>}/>
        </div>
    )
}

export default NewConnection
