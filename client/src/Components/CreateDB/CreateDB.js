import React,{useState} from 'react';
import "./CreateDB.css";
//import ModalReuse from '../ModalReuse/ModalReuse';
import Modal from "react-bootstrap/Modal"


function CreateDB() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const handleOpen=()=>setIsModalOpen(true)
    const handleClose=()=>setIsModalOpen(false)

    const createDB=(e)=>{
        e.preventDefault();
        alert("DB Created");
      handleClose();
       
    }
    const [dbName,setDbName]=useState("");
    const [collectionName,setCollectionName]=useState("")
    /////////////////
    // const fields=[{name:"Database Name",
    //                 action:"dbName",
    //                 inputType:"text"
    //                },
    //             {name:"Collection Name",
    //             action:"collectionName",
    //             inputType:"text"}]

    // const action={
    //     name:"createDB",
    //     func:function createDB(e){
    //         e.preventDefault();
    //          alert("DB Created");
    //     }

    // }
//////////////////////////////
    return (
        <div> 
            
        {/* <ModalReuse
        openLabel="CREATE DATABASE"
        fields={fields}
        action={action}

        /> */}


















            <button type="button" onClick={handleOpen}>CREATE DATABASE</button>
            <Modal  show={isModalOpen} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Create New Database</Modal.Title>
                </Modal.Header>
                <form className="modalForm">
                <Modal.Body>
                    
                        <label htmlFor="dbName">Database Name</label>
                        <br/>
                        <input id="dbName" type="text" value={dbName} onChange={(e)=>setDbName(e.target.value)}/>
                        <br/>
                        <label htmlFor="collectionName">Collection Name</label>
                        <br/>
                        <input id="collectionName" type="text" value={collectionName} onChange={(e)=>setCollectionName(e.target.value)}/>                    
                    
                </Modal.Body>

                <Modal.Footer >
                   <div className="footer">
                    <button className="generalButton" type="button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="button" type="submit" onClick={createDB}>
                        CREATE DATABASE
                    </button>
                  </div>
                </Modal.Footer>
                </form>
            </Modal>
        </div>
    )
}

export default CreateDB
