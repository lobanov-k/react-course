import React from "react";
import PropTypes from "prop-types";

import { UserItemStyled } from "./styled/UserItemStyled";

export function UserItem({
  index,
  name,
  age,
  isAdmin,
  onDelete,
  onStatusChange,
}) {
  const onChangeHandler = (e) => {
    console.log(e.target.checked);
    onStatusChange(e.target.checked);
  };

  return (
    <UserItemStyled>
      <div className="User__index">#{index}</div>
      <div className="User__name">Name: {name}</div>
      <div className="User__phone">Age: {age}</div>
      <label>
        Admin:
        <input type="checkbox" checked={isAdmin} onChange={onChangeHandler} />
      </label>
      <button onClick={onDelete}>Delete</button>
    </UserItemStyled>
  );
}

UserItem.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};
