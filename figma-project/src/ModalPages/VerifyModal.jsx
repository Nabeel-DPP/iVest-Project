import React from 'react';
import MaterialModal from '../modal/ReactModal/MaterialModal';
import { useContext } from 'react';
import { openContext } from '../modal/ReactModal/openProvider';

function VerifyModal () {
    const {open ,setOpen} = useContext(openContext);
 

    function openModal(e)
    {
     e.preventDefault();
     setOpen(true);
     console.log(open);
    }
  return (
    <div>
       <h1>Verify Account Modal</h1>
      {<button onClick={openModal}>Click Here to Open Modal</button>}
      <MaterialModal >

<div className='ModalContainer'>
    <div className="row">
      <div className="col-10">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">You’re all set John! 
        Let’s verify your email.</h1>
      </div>
      
     <div className="modalSection">
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Please enter the 4 digit code sent to 
        yourmail@example.com</p>
      </div>
  
     <div className="row verify-modal">
     <div className="col-md-3">
         <input type="text" className="form-control" id="Number1" />
    </div>
    <div className="col-md-3">
         <input type="text" className="form-control" id="Number2" />
    </div>
    <div className="col-md-3">
         <input type="text" className="form-control" id="Number3" />
    </div>
    <div className="col-md-3">
         <input type="text" className="form-control" id="Number4" />
    </div>


 </div>
   
 </div>


  
    </div>


    

    <div className="modalBtns row">
      <button type="button" class="btn-submit" data-bs-dismiss="modal">Verify</button>
      </div>
      <div className="container col-12 verify-btn d-flex justify-content-between ">
      <div className="cancel btn">Cancel</div>
      <div className="resendCode btn">Resend Code</div>
      </div>
    </div>
</MaterialModal>
    </div>
  )
}

export default VerifyModal;
