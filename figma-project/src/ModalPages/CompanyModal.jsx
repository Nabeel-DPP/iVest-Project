import React from 'react'
import MaterialModal from '../modal/ReactModal/MaterialModal';
import { useContext } from 'react';
import { openContext } from '../modal/ReactModal/openProvider';
const CompanyModal = () => {
  
    const {open ,setOpen} = useContext(openContext);
 

    function openModal(e)
    {
     e.preventDefault();
     setOpen(true);
     console.log(open);
    }


  return (
    <div>
      <h1>Company Modal</h1>
      {<button onClick={openModal}>Click Here to Open Modal</button>}
      <MaterialModal >

<div className='ModalContainer'>
    <div className="row">
      <div className="col-11">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Let’s find out about Pre-IPO companies!</h1>
      </div>
      
     <div className="modalSection">
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Do you know how and why companies do an IPO (become listed)?</p>
      </div>
  
     <div className="row container">
<div class="form-check col-4 dash-check">
  <input class="form-check-input dash-radio " type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label class="form-check-label" for="flexRadioDefault3">
    Yes
  </label>
</div>
<div class="form-check col-4 dash-check">
  <input class="form-check-input dash-radio " type="radio" name="flexRadioDefault" id="flexRadioDefault4"/>
  <label class="form-check-label" for="flexRadioDefault4">
  No
  </label>
</div>
    </div>
 </div>




 <div className="modalSection">
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Did you know that Facebook made their backers a 100% return in one year and 1,000% in 3 years before their IPO?</p>
      </div>
  
     <div className="row container">
<div class="form-check col-4 dash-check">
  <input class="form-check-input dash-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault5"/>
  <label class="form-check-label" for="flexRadioDefault5">
    Yes
  </label>
</div>
<div class="form-check col-4 dash-check">
  <input class="form-check-input dash-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault6"/>
  <label class="form-check-label" for="flexRadioDefault6">
  No
  </label>
</div>
    </div>
 </div>


 <div className="modalSection">
      <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
        <p>Are you ready to become an exclusive member and start enjoying the same benefits as the ultra-rich?</p>
      </div>
  
     <div className="row container">
<div class="form-check col-4 dash-check">
  <input class="form-check-input dash-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault7"/>
  <label class="form-check-label" for="flexRadioDefault7">
    Yes
  </label>
</div>
<div class="form-check col-4 dash-check">
  <input class="form-check-input dash-radio" type="radio" name="flexRadioDefault" id="flexRadioDefault8"/>
  <label class="form-check-label" for="flexRadioDefault8">
  No
  </label>
</div>
    </div>
 </div>




  {/* hello */}
    </div>


    

    <div className="modalBtns row">
      <button type="button" class="btn-submit" data-bs-dismiss="modal">Click here to activate your Free account & start your journey</button>
      <button type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
    </div>
    </div>
</MaterialModal>
    </div>
  )
}

export default CompanyModal;
