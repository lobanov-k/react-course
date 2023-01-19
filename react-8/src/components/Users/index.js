import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { UserForm } from "./UserForm";
import { UserItem } from "./UserItem";
import { Loader } from "./styled/Loader";
import ListItemButton from "@mui/material/ListItemButton";

import {
  addUser,
  deleteUserById,
  fetchUsers,
  setAdmin,
} from "../../slices/usersSlice";

export function Users() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.list);
  const isDataLoading = useSelector((state) => state.users.loading);

  const onUserAddHandler = (user) => {
    dispatch(addUser(user));
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
        <UserForm onSubmit={onUserAddHandler} />
      </Grid>
      <Grid item md={8} xl={6}>
        <Box>
          {isDataLoading && <Loader />}
          {!isDataLoading && (
            <List>
              {userList?.map((user, index) => (
                <ListItem key={user.id}>
                  <ListItemButton
                    selected={user.isAdmin}
                    onClick={() =>
                      onUserStatusChangeHandler(user.id, !user.isAdmin)
                    }
                  >
                    <ListItemText
                      primary={`#${index}. ${user.name}, ${user.age} y.o.`}
                    />
                    <IconButton aria-label="delete" size="large">
                      <DeleteOutlineIcon
                        onClick={onUserDeleteHandler(user.id)}
                      />
                    </IconButton>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
