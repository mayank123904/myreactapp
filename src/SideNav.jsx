import React from "react";
import Menu from './Menue2';
const sn={
    // border:"1px solid white",
    width:"fit-content",
    backgroundColor:"#172035",
    height:"738px"
}
const d={
    width:"150px",
    height:"70px",
}
const bt={
    backgroundColor:"#ff0066",
    color:"white",
    marginTop:"200px",
    width:"90px",
    height:"40px",
    marginLeft:"30px",
    border:"none"
}
const pic={
   width:"150px",
   height:"130px", 
}
const pd={
    paddingRight:"10px"
}
function SideNav(){
    return(  
    <div style={sn}>
    <div style={d}><img style={pic} src="https://i.ibb.co/nPPYm64/dblogo.jpg"></img></div>
    <br></br><br></br><br></br><br></br>
    <Menu option="Dashboard" glyp="glyphicon glyphicon-home"/>
    <Menu option="My Team" glyp="glyphicon glyphicon-user"/>
    <Menu option="Task" glyp="glyphicon glyphicon-tasks"/>
    <Menu option="Calendar" glyp="glyphicon glyphicon-calendar"/>
    <Menu option="Report" glyp="glyphicon glyphicon-signal"/>
    <Menu option="Settings" glyp="glyphicon glyphicon-cog"/>
    <button style={bt}><span style={pd} class="glyphicon glyphicon-log-out"></span>Logout</button>
    </div>  
    );
}
export default SideNav;