import React, { useState } from 'react';
import { UserContext } from '../Contexts/UserContext';

export function UserProvider({ children }) {
  const [loggedInUser, setLoggedInUser] = useState("u1");
  const value = {
    userList: [
      { id: "u1", name: "Kamil" },
      { id: "u2", name: "Zdena" },
      { id: "u3", name: "Helena" },
    ],
    loggedInUser,
    setLoggedInUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
