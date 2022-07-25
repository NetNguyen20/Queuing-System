import React from "react";
 
const PopupBell = props => {
  return (
    <div className="popup-box-bell">
      <div className="boxbell">
        <span className="close-icon-bell" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default PopupBell;