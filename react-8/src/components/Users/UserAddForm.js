import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { UserForm } from "./UserForm";

const AddButton = () => (
  <Button type="submit" endIcon={<PersonAddIcon />}>
    Add User
  </Button>
);

export function UserAddForm({ onSubmit }) {
  return (
    <UserForm
      onSubmit={(user) => onSubmit({ id: v4(), ...user })}
      ButtonComponent={AddButton}
    />
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
