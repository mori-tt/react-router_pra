import { useLocation, useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  return (
    <>
      <h1>Page1DetailA</h1>
      <button onClick={() => navigate("/page1")}>戻る</button>
    </>
  );
};
