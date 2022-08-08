import { useContext } from "react";
import { Context } from "../contexts/UserContex";

const useData = () => {
  const [data, setData] = useContext(Context);

  return [data, setData];
};

export default useData;
