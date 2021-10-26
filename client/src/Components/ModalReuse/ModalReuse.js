// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';

// function ModalReuse({openLabel,fields,action, ...props}) {
//     const [isModalOpen,setIsModalOpen]=useState(false);
//     const handleOpen=()=>setIsModalOpen(true)
//     const handleClose=()=>setIsModalOpen(false)
//     const [inputValue,setInputValue]=useState("")
   
//     const onInputChange=(e)=>{
//         setInputValue(e.target.value);
//         if(props.onChange){
//             props.onChange(inputValue)
//         }
//     }
//     return (
//         <div>
//               <button type="button" onClick={handleOpen}>{openLabel}</button>
//             <Modal  show={isModalOpen} onHide={handleClose}>

//                 <Modal.Header closeButton>
//                     <Modal.Title>{openLabel}</Modal.Title>
//                 </Modal.Header>
//                 <form className="modalForm">
//                 <Modal.Body>
//                         {fields.map(field=>(
                            
//                                 <div>
//                                     <label htmlFor={field.action}>{field.name}</label>
//                                     <br/>
//                                     <input id={`${field.action}`} type={field.inputType} value={inputValue} onChange={onInputChange(inputValue)} />
//                                     <br/>
//                                     <br/>
//                                 </div>

//                         ))}        
//                 </Modal.Body>
//                 <Modal.Footer >
//                    <div className="footer">
//                     <button className="generalButton" type="button" onClick={handleClose}>
//                         Cancel
//                     </button>
//                     <button className="button" type="submit" onClick={action.func}>
//                         {action.name}
//                     </button>
//                   </div>
//                 </Modal.Footer>
//                 </form>
//             </Modal>
//         </div>
//     )
// }

// export default ModalReuse
