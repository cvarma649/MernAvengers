import React from 'react';
import "./Collections.css";
import CreateCollection from '../CreateCollection/CreateCollection';
import LeftPanel from '../LeftPanel/LeftPanel';

function Collections() {
    const otherItems=[{"name":"New Connection","link":"/newConnection"}]
    return (
        <div>
            <LeftPanel listContent={otherItems}/>
            <div className="connection">        
            <h2>Collections</h2>   
            <div className="conn">
           
              
              <CreateCollection />
            </div>
          <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Database Name</th>
                        <th>Storage Size</th>
                        <th>Collections</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>xample.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>ple.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>jcom</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        </div>
    )
}

export default Collections
