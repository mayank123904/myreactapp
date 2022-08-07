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
function Menu(props){
    return(
        <React.Fragment>
        <div style={op} onMouseOver={show} onMouseOut={view}><span style={pd} className={props.glyp}></span>{props.option}</div>
        </React.Fragment>
    );
}
export default Menu;
