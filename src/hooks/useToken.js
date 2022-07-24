import { useContext } from "react";
import { Context } from "../contexts/AuthContex";

const useToken = () => {
  const { token, setToken } = useContext(Context);

  return [token, setToken];
};

export default useToken;
