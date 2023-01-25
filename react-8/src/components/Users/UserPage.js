import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import { BASE_URL } from "../../api";
import { Loader } from "./styled/Loader";

export function UserPage() {
  const [user, setUser] = useState(null);
  const { id: userId } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <Box>
      {user ? (
        <>
          <div>Name: {user.name}</div>
          <div>Age: {user.age}</div>
        </>
      ) : (
        <Loader />
      )}
    </Box>
  );
}
