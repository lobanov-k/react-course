import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { UserForm } from "./UserForm";
import { UserItem } from "./UserItem";
import { Loader } from "./styled/Loader";

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

  const onUserStatusChangeHandler = (id) => (isAdmin) =>
    dispatch(setAdmin({ userId: id, isAdmin }));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <UserForm onSubmit={onUserAddHandler} />
      {isDataLoading && <Loader />}
      {!isDataLoading &&
        userList?.map((user, index) => (
          <UserItem
            {...user}
            index={index + 1}
            key={user.id}
            onDelete={onUserDeleteHandler(user.id)}
            onStatusChange={onUserStatusChangeHandler(user.id)}
          />
        ))}
    </>
  );
}
