import React,{useState} from 'react';

import "./ConnectDB.css"

function ConnectDB({setConn}) {
    const [dbUrl,setDbUrl]=useState("")
    const handleSubmit=(e)=>{
       
        e.preventDefault();
      
            setConn(true);
        }
       

    
    return (
        <div className="connectDB">
           <h2>New Connection</h2> 
           <div className="dbConnectForm">
               <form onSubmit={handleSubmit}>
               <label htmlFor="dbconnectInput">Paste your MongoDB Atlas Connection URL</label>
               <br/>
               <input id="dbconnectInput" type="text" value={dbUrl} onChange={(e=>setDbUrl(e.target.value))}/>
               <br/>
               <button type="submit">CONNECT</button>
               </form>
           </div>
        </div>
    )
}

export default ConnectDB
