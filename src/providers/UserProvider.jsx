import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const contextName = "翔太";
  const [userInfo, setUserInfo] = useState(null);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
