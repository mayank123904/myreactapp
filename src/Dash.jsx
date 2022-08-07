import React from "react";

const c={
    height:"100px;",
    width:"200px",
    border:"1px solid red",
    color:"white",
    borderRadius:"5%",
    marginTop:"10px"
}
const chd={
    width:"30px",
    height:"30px",
    borderTop:"2px solid yellow",
    borderRadius:"40%"
}
function D(props){
    return(
    <React.Fragment>
    <div style={c}>{props.name}
    <div style={chd}></div>
    <h1>{props.data}</h1>
    <p>{props.desc}</p>
    </div>
    </React.Fragment>
    );
}
export default D;