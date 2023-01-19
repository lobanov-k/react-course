import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import { inputStyles } from "./styles";

export function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  const onNameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onAgeChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const onStatusChangeHandler = (e) => {
    setIsAdmin(!!e.target.checked);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onSubmit({
      id: v4(),
      name,
      age,
      isAdmin,
    });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmitHandler}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        value={name}
        label="Name"
        variant="outlined"
        type="text"
        onChange={onNameChangeHandler}
        required
        sx={{ ...inputStyles, color: "primary" }}
      />
      <TextField
        value={age}
        label="Age"
        variant="outlined"
        type="number"
        onChange={onAgeChangeHandler}
        sx={inputStyles}
      />
      <FormControlLabel
        control={<Checkbox value={isAdmin} onChange={onStatusChangeHandler} />}
        label={`Is "${name || "user"}" admin?`}
        sx={inputStyles}
      />
      <Button type="submit" endIcon={<PersonAddIcon />}>
        Add User
      </Button>
    </Box>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
