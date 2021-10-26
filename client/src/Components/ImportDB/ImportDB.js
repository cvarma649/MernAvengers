import React from 'react';
import "./ImportDB.css";
import LeftPanel from '../LeftPanel/LeftPanel';

function ImportDB() {
    const otherItems=[{"name":"New Connection","link":"/newConnection"}]
    return (
        <div>
            <LeftPanel listContent={otherItems}/>
            <div class="table_container">
                <h2>Import Your DataSet</h2>
            <div className="dbConnectForm">
               <form >
               <label htmlFor="dbconnectInput">Select Files to Upload</label>
               <br/>
                <button type="button" className="headersOrNot" data-toggle="dropdown">
        Headers Options
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item">Headers In File</a>
          <a class="dropdown-item">No Headers In File</a>
        </div>
               <input id="dbconnectInput" type="file" />
              
               <br/>
               <button className="importButton" type="submit">Import</button>
               </form>
           </div>
               </div>
        </div>
    )
}

export default ImportDB
