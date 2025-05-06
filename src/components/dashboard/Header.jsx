import React, { useContext } from "react"; // Import useContext correctly
import { Layout, } from "antd";
import "./head-sidebar.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";
import { ThemeContext } from '../../context/ThemeContext';




const { Header } = Layout; // Import Header from Layout

const Head=()=> {
  const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate
  const { theme, toggleTheme}= useContext(ThemeContext);

  const handleLogout = () => {
    console.log("Logging out...");
     navigate("/Loginform");
  };
  const handletoggleTheme = ()=>{
    console.log("current theme");
    toggleTheme();
  };
  return (
    <Header className={`heeader header-${theme}`}>
      
      <div className="header-title  "> 
        Demo Site</div> 
        <div className="headbutton">
        <button type="button" className="btn btn-primary" onClick={handletoggleTheme}>
          Toggle Theme
        </button>
      <button 
        type="button" 
        className="btn btn-primary logout-custon-btn" 
        onClick={handleLogout}
      >
        Logout
      </button>
      </div>
    </Header>
  );
}
export default Head;
