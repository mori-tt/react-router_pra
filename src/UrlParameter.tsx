import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return <h1>UrlParameter: {id}</h1>;
};
