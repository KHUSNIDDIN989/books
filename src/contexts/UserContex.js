import { createContext, useState } from "react";

const Context = createContext();

const UserContex = ({ children }) => {
  const [data, setData] = useState([]);
  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};

export { Context, UserContex };
