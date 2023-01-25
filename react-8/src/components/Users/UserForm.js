import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import * as colors from "@mui/material/colors";

import { inputStyles } from "./styles";

export function UserForm({
  onSubmit,
  ButtonComponent,
  user = {
    name: "",
    age: 0,
    isAdmin: false,
  },
}) {
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [isAdmin, setIsAdmin] = useState(user.isAdmin);
  const [usersLabel, setUsersLabel] = useState(null);

  const labels = useSelector((state) => state.labels.list);

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
      name,
      age,
      isAdmin,
      label: usersLabel,
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
      <Select onChange={(e) => setUsersLabel(e.target.value)}>
        {labels.map((label) => (
          <MenuItem
            value={label.id}
            sx={{ backgroundColor: colors[label.color][500] }}
          >
            {label.text}
          </MenuItem>
        ))}
      </Select>
      <ButtonComponent />
    </Box>
  );
}

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  ButtonComponent: PropTypes.element.isRequired,
};
