import { Link } from "react-router-dom";
import "/src/App.css";
function Navbar()
{
    return(
        <>
        <nav class="navbar navbar-expand-lg  d-flex justify-content-center">
  <div class="navbarContainer">
    
    <div className="logo">
    <a class="navbar-brand" href="#"> <img src="/src/layout/Logo.png"  alt="Logo" /></a>
    </div>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="navbarItems " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Membership Club</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-magnifying-glass"></i> </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Log In </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="register" href="#"> Register </a>
        </li>
       
       
      </ul>
     
    </div>
  </div>
</nav>
   
        </>
    );
}

export default Navbar;