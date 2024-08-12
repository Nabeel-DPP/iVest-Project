import React from 'react'

const RegFrom = () => {
  return (
    <div>
       <div className="container outlet d-flex justify-content-center">
    <form class="row formBox g-3 col-6">
      <h3>Create Your Free Account</h3>
      <p>Please verify that all fields are completed before proceeding</p>

  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Email-Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Country</label>
    <select id="inputState" class="form-select">
      <option selected>Pakistan</option>
      <option>India</option>
      <option>Australia</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
 
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-12">
    <ul>
    <li>At Least 8 Characters</li>
   <li>At Least 1 Number</li>
   <li>At Least Uppercase Letter</li>
    </ul>
   
  </div>
  <div class="col-12">
    <button className="registerBtn"> Register For Free </button>
  </div>
  <div className="container d-flex justify-content-center">
  <div className="formLine">
    Already Have an Account ?<a href="#" className="formLoginBtn"> <b>Log In</b></a>
  </div>
  </div>
</form>
      </div>

      

     
      
      
    </div>
  )
}

export default RegFrom;
