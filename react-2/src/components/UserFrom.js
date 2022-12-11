import React, { Component } from "react";
import { v4 } from "uuid";

import { UserItem } from "./UserItem";
import { Select } from "./Select";

const ALL = "0";
const SIMPLE = "1";
const ADMIN = "2";

const SELECT_OPTIONS = [
  {
    text: "All",
    value: ALL,
  },
  {
    text: "Simple",
    value: SIMPLE,
  },
  {
    text: "Admin",
    value: ADMIN,
  },
];

export class UserFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      name: "",
      phone: "",
      userTypeToShow: ALL,
    };
  }

  onNameChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  onPhoneChangeHandler = (e) => {
    if (/^[\d]*$/.test(e.target.value) || !e.target.value)
      this.setState((prev) => ({
        ...prev,
        phone: e.target.value,
      }));
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    if (this.state.name && this.state.phone)
      this.setState((prev) => ({
        name: "",
        phone: "",
        users: [
          ...prev.users,
          {
            name: this.state.name,
            phone: this.state.phone,
            id: v4(),
            isAdmin: false,
          },
        ],
      }));
  };

  onStatusChangeHandler = (userId) => {
    this.setState((prev) => ({
      ...prev,
      users: prev.users.map((user) => {
        if (user.id !== userId) {
          return user;
        } else {
          return {
            ...user,
            isAdmin: !user.isAdmin,
          };
        }
      }),
    }));
  };

  onSelectChangeHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      userTypeToShow: e.target.value,
    }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmitHandler}>
          <input
            placeholder="Name"
            onChange={this.onNameChangeHandler}
            value={this.state.name}
          />
          <input
            placeholder="Phone"
            onChange={this.onPhoneChangeHandler}
            value={this.state.phone}
          />
          <button>Save</button>
        </form>
        <Select
          label="Show users:"
          options={SELECT_OPTIONS}
          onChange={this.onSelectChangeHandler}
        />
        <div className="usersList">
          {this.state.users
            .filter(({ isAdmin }) => {
              switch (this.state.userTypeToShow) {
                case ADMIN:
                  return isAdmin;
                case SIMPLE:
                  return !isAdmin;
                case ALL:
                default:
                  return true;
              }
            })
            .map(({ name, phone, id, isAdmin }, index) => (
              <UserItem
                key={id}
                id={id}
                name={name}
                phone={phone}
                index={index}
                isAdmin={isAdmin}
                onStatusChange={this.onStatusChangeHandler}
              />
            ))}
        </div>
      </>
    );
  }
}
