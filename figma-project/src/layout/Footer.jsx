import React from "react";
function Footer()
{
    return(

        <>
         <footer className="footer text-center col-12">
            <div>
                <div className="row footerRow">
                    
                    <div className="col-lg-4  mb-lg-0">
                        <h4 className="text-uppercase mb-4"><img src="/src/layout/Logo.png"  alt="Logo" /></h4>
                        <p className="lead mb-0">
                        <i className="fab fa fa-facebook-f fIcon"></i>
                        <i className="fa-brands fa-twitter fIcon"></i>
                        <i className="fa-brands fa-instagram fIcon"></i>
                        <i className="fa-brands fa-snapchat fIcon"></i>
                        
                       
                        </p>
                    </div>

                    <div className="col-lg-2  mb-lg-0">
                        <h4 className="text-uppercase mb-4">Navigation</h4>
                        <p className="lead mb-0">
                        How to Buy
                        </p>
                        <p className="lead mb-0">
                       Overview
                        </p>
                        <p className="lead mb-0">
                        Blog News
                        </p>
                        <p className="lead mb-0">
                        How to Sell
                        </p>
                    </div>

                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Support</h4>
                        <p className="lead mb-0">
                        Contact Us
                        </p>
                        <p className="lead mb-0">
                        Developer Center
                        </p>
                        <p className="lead mb-0">
                        Helpers
                        </p>
                        <p className="lead mb-0">
                        Terms & Conditions                     
                         </p>
                         
                    </div>
                   
                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Network</h4>
                        <p className="lead mb-0">
                        Network Stats
                        </p>
                        <p className="lead mb-0">
                        Block Explorers
                        </p>
                        <p className="lead mb-0">
                        Governance
                        </p>
                        <p className="lead mb-0">
                        Exchange Markets                       
                         </p>
                         
                    </div>

                    <div className="col-lg-2 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">About Us</h4>
                        <p className="lead mb-0">
                        Our Coin
                        </p>
                        <p className="lead mb-0">
                        Careers
                        </p>
                        <p className="lead mb-0">
                        Our Team
                        </p>
                        <p className="lead mb-0">
                        Our Project
                        </p>
                         
                    </div>
                    
                    
                   

                    
                </div>
                <hr  className="line"/>
                <div className="copyright py-4 text-center text-white">
            <div className="container"><small>© 2024 iVest Club All rights reserved. Design by Eazisols</small></div>
        </div>
            </div>
        </footer>
       
      



        </>
    );
}

export default Footer;