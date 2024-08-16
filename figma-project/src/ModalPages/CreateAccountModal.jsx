import React from 'react'
import MaterialModal from '../modal/ReactModal/MaterialModal';
import { useContext } from 'react';
import { openContext } from '../modal/ReactModal/openProvider';

const CreateAccountModal = () => {
  
    const {open ,setOpen} = useContext(openContext);
 

    function openModal(e)
    {
     e.preventDefault();
     setOpen(true);
     console.log(open);
    }


  return (
    <div>
      <h1>Create Account Modal</h1>
      {<button onClick={openModal}>Click Here to Open Modal</button>}
      <MaterialModal >

<div className='ModalContainer'>
    <div className="row">
      <div className="col-12">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Great - Lets get you started on
        Your Journey!</h1>
      </div>
      
     <div className="modalSection">
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Please let us know a little bit more about yourself, so that we can start creating your Free Acount:</p>
      </div>
  
     <div className="row">
     <div className="col-md-6 modal-input">
            <label htmlFor="inputFirstName" className="form-label">First Name</label>
            <input type="text" className="form-control" id="inputFirstName" />
          </div>
          <div className="col-md-6 modal-input">
            <label htmlFor="inputLastName" className="form-label">Surname</label>
            <input type="tesxt" className="form-control" id="inputLastName" />
          </div>
    </div>
    <div className="row">
     <div className="col-md-12 modal-input">
            <label htmlFor="inputDate" className="form-label">Date of Birth</label>
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

export default CreateAccountModal;
