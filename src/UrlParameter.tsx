import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <h1>
      UrlParameter: {id}
      <br /> QueryParameter: {query.get("name")}
    </h1>
  );
};
