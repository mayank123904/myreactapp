import React from "react";
const op={
// border:"1px solid black",
width:"150px",
height:"35px",
// textAlign:"center",
paddingTop:"5px",
color:"blue",
backgroundColor:"#172035",
marginTop:"10px",
paddingLeft:"20px"
}
const pd={
    // display:"grid",
    // gridTemplateColumns: "1fr 1fr",
    // gridGap: "20px",
    // border:"1px solid black",
    paddingRight:"15px"
}
function show(e) {
    e.target.style.borderLeft = '5px solid yellow';
}
function view(e) {
    e.target.style.borderLeft = 'none';
}
function Menu(){
    return(
        <React.Fragment>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} class="glyphicon glyphicon-home"></span>Dashboard</div>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} class="glyphicon glyphicon-user"></span>My Team</div>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} class="glyphicon glyphicon-tasks"></span>Task</div>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} class="glyphicon glyphicon-calendar"></span>Calendar</div>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} class="glyphicon glyphicon-signal"></span>Report</div>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} class="glyphicon glyphicon-cog"></span>Settings</div>
        </React.Fragment>
    );
}
export default Menu;
