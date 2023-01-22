import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Button from "@mui/material/Button";

import { UserForm } from "./UserForm";

const SaveButton = () => (
  <Button type="submit" endIcon={<ModeEditOutlineIcon />}>
    Save User
  </Button>
);

export function UserEditForm({ id, name, age, isAdmin, onSubmit }) {
  const onSubmitHandler = (user) => onSubmit({ id, ...user });

  return (
    <UserForm
      onSubmit={onSubmitHandler}
      user={{ name, age, isAdmin }}
      ButtonComponent={SaveButton}
    />
  );
}
