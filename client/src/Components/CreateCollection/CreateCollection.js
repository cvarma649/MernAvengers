import React,{useState} from 'react';
import Modal from "react-bootstrap/Modal";

function CreateCollection() {
    const [isModalOpen,setIsModalOpen]=useState(false);
    const handleOpen=()=>setIsModalOpen(true)
    const handleClose=()=>setIsModalOpen(false)

    const createCollection=(e)=>{
        e.preventDefault();
        alert("Collection Created");
      handleClose();
       
    }
    const [collectionName,setCollectionName]=useState("")
    return (
        <div>
             <div> 
            <button type="button" onClick={handleOpen}>CREATE COLLECTION</button>
            <Modal  show={isModalOpen} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Create New Collection</Modal.Title>
                </Modal.Header>
                <form className="modalForm">
                <Modal.Body> 
                        <label htmlFor="collectionName">Collection Name</label>
                        <br/>
                        <input id="collectionName" type="text" value={collectionName} onChange={(e)=>setCollectionName(e.target.value)}/>
                        <br/>              
                </Modal.Body>

                <Modal.Footer >
                   <div className="footer">
                    <button className="generalButton" type="button" onClick={handleClose}>
                        Cancel
                    </button>
                    <button className="button" type="submit" onClick={createCollection}>
                        CREATE COLLECTION
                    </button>
                  </div>
                </Modal.Footer>
                </form>
            </Modal>
        </div>
        </div>
    )
}

export default CreateCollection
