
import React from 'react'
import MaterialModal from '../modal/ReactModal/MaterialModal';
import { useContext } from 'react';
import { openContext } from '../modal/ReactModal/openProvider';


const MembershipModal = () => {
    const {open ,setOpen} = useContext(openContext);
 

    function openModal(e)
    {
     e.preventDefault();
     setOpen(true);
     console.log(open);
    }


  return (
    <div>
      <h1>Membership Modal</h1>
      {<button onClick={openModal}>Click Here to Open Modal</button>}
      <MaterialModal >

<div className='ModalContainer'>
    <div className="row">
      <div className="col-12">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Stay in the Loop!</h1>
      </div>
      
     <div className="modalSection">
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Stay Updated with Your Suggested Club's Name!</p>
      </div>
  
     
    <div className="row membershipModal">
     <div className="col-md-12 modal-input">
            <label htmlFor="inputDate" className="form-label">Email address</label>
            <input type="text" className="form-control" id="inputDate" />
          </div>
          
    </div>
 </div>


  
    </div>


    

    <div className="modalBtns row">
      <button type="button" class="btn-submit" data-bs-dismiss="modal">Submit</button>
      <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
    </div>
    </div>
</MaterialModal>
    </div>
  )
}

export default MembershipModal;
