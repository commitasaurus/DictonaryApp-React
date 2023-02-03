import React from "react";

const HeaderDropdown = (props) => {
  return (
    <div>
      <select name="font">
        <option value="Serif">Serif</option>
        <option value="Arial">Arial</option>
        <option value="Sans-serif">Sans-serif</option>
      </select>
    </div>
  );
};

export default HeaderDropdown;
