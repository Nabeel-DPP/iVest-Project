import React, { useContext } from 'react';
import { openContext, OpenProvider } from '../modal/ReactModal/openProvider';
import MaterialModal from '../modal/ReactModal/MaterialModal';

const RegFrom = () => {

 const {open ,setOpen} = useContext(openContext);
 

 function openModal(e)
 {
  e.preventDefault();
  setOpen(true);
  console.log(open);
 }
 
  return (
    <div>
      <div className="container outlet p-3 d-flex justify-content-center">
        <form className="row formBox g-3 col-6">
          <h3>Create Your Free Account</h3>
          <p>Please verify that all fields are completed before proceeding</p>

          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">First Name</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Last Name</label>
            <input type="password" className="form-control" id="inputPassword4" />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Email-Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">Country</label>
            <select id="inputState" className="form-select">
              <option selected>Pakistan</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>

          <div className="col-md-6">
            <label htmlFor="inputpass1" className="form-label">Password</label>
            <input type="password" className="form-control" id="inputpass1" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputpass2" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="inputpass2" />
          </div>

          <div className="col-12">
            <ul>
              <li>At Least 8 Characters</li>
              <li>At Least 1 Number</li>
              <li>At Least Uppercase Letter</li>
            </ul>

          </div>
          <div className="col-12">
            <button className="registerBtn"> Register for Free </button>
          </div>
          <div className="container d-flex justify-content-center">
            <div className="formLine">
              Already Have an Account ?<a href="#" className="formLoginBtn" onClick={openModal}
            ><b>Log In</b></a>
            </div>
          </div>
        </form>

       
      </div>
      <a href="#" className="formLoginBtn" onClick={openModal}
            ><b>Log In</b></a>
      <MaterialModal >

      <div className='ModalContainer container p-4'>
          <div className="row">
            <div className="col-11">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Please Enter Your Email & Username !</h1>
            </div>
            <div className="col-12 modal-des" style={{ marginTop: "10px" }}>
              <p>Let us know your email so we can verify you and also the username You would like to use on the platform</p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12 modal-input">
              <label htmlFor="inputName" className="form-label">Username</label>
              <input type="text" className="form-control" id="inputName"  />
            </div>
            <div className="col-12 modal-input">
              <label htmlFor="inputAddress" className="form-label">Email</label>
              <input type="text" className="form-control" id="inputAddress"  />
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

export default RegFrom;
