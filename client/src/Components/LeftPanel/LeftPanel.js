import React from 'react';
import "./LeftPanel.css";
import {Link} from "react-router-dom";

function LeftPanel({listContent}) {
    return (
        <div>
            <div className="sideNav">
                      <ul>
                      {
                          listContent.map(content=>(
                              <li><Link to={`${content.link}`}>{content.name}</Link></li>
                          ))
                      }
                      </ul>
                    
              
            </div>
              
        </div>
    )
}

export default LeftPanel
