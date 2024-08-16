import React from "react";
import RegFrom from "./pages/signup";
import "../src/assets/css/styles.css";
import { OpenProvider } from "./modal/ReactModal/openProvider";
import Dashboard from "./dashboard/Dashboard";
import CompanyModal from "./ModalPages/CompanyModal";
import CreateAccountModal from "./ModalPages/CreateAccountModal";
import VerifyModal from "./ModalPages/VerifyModal";
import MembershipModal from "./ModalPages/MembershipModal";
function App() {
  return (
    
    <OpenProvider>

    <div className="home">
    
    {/* <RegFrom/> */}
    <Dashboard/>
    {/* <CompanyModal/> */}
    {/* <CreateAccountModal/> */}
    {/* <VerifyModal/> */}
    {/* <MembershipModal/> */}
    
    </div>
    </OpenProvider>

    
    
    
    
  )
}

export default App;
