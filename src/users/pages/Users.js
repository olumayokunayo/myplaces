import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ayo Deji",
      image:
        "https://images.pexels.com/photos/18022532/pexels-photo-18022532/free-photo-of-man-with-tattoos-on-body.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
