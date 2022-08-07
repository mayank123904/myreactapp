import React from 'react';
import ReactDOM from 'react-dom';
// import SideNav from './SideNav';
import D from './Dash'
// import './index.css';

ReactDOM.render(
  <React.Fragment>
    {/* <SideNav /> */}
    <D name="Works" data="75" desc="Works Today"/>
    <D name="Analytics" data="310" desc="Analytics Today" />
    <D name="Statistics" data="75" desc="Works Today"/>
    <D name="Tasks" data="15" desc="Task Today"/>
  </React.Fragment>,
  document.getElementById("root")
);