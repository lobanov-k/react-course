import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Badge from "@mui/icons-material/Badge";
import { NavLink } from "react-router-dom";
import * as colors from "@mui/material/colors";

import { UserAddForm } from "./UserAddForm";
import { Loader } from "./styled/Loader";
import { UserEditForm } from "./UserEditForm";

import {
  addUser,
  deleteUserById,
  fetchUsers,
  setAdmin,
  updateUser,
} from "../../slices/usersSlice";

export function Users() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.list);
  const isDataLoading = useSelector((state) => state.users.loading);
  const [editFormData, setEditFormData] = useState(null);
  const labels = useSelector((state) => state.labels.list);

  const onUserAddHandler = (user) => {
    dispatch(addUser(user));
  };

  const onUserEditHandler = (user) => {
    dispatch(updateUser(user));
  };

  const onUserDeleteHandler = (id) => () => dispatch(deleteUserById(id));

  const onUserStatusChangeHandler = (id, isAdmin) =>
    dispatch(setAdmin({ userId: id, isAdmin }));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item md={4} xl={6} sx={{}}>
        <UserAddForm onSubmit={onUserAddHandler} />
        {editFormData && (
          <UserEditForm
            {...editFormData}
            onSubmit={(user) => {
              onUserEditHandler(user);
              setEditFormData(null);
            }}
          />
        )}
      </Grid>
      <Grid item md={8} xl={6}>
        <Box>
          {isDataLoading && <Loader />}
          {!isDataLoading && (
            <List>
              {userList?.map((user, index) => {
                const label = labels.find(({ id }) => id == user.label);
                return (
                  <NavLink key={user.id} to={`/users/${user.id}`}>
                    <ListItem>
                      {/* <ListItemButton
                    selected={user.isAdmin}
                    onClick={() =>
                      onUserStatusChangeHandler(user.id, !user.isAdmin)
                    }
                  > */}
                      <ListItemText
                        primary={`#${index}. ${user.name}, ${user.age} y.o.`}
                      />
                      <IconButton
                        aria-label="edit"
                        size="large"
                        onClick={() => setEditFormData(user)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={onUserDeleteHandler(user.id)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                      {/* </ListItemButton> */}
                      {label && (
                        <Badge
                          sx={{ backgroundColor: colors[label.color][500] }}
                        >
                          {label.text}
                        </Badge>
                      )}
                    </ListItem>
                  </NavLink>
                );
              })}
            </List>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
