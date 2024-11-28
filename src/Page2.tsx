import { Link, Outlet } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2</h1>
      <Link to="999">URL Parameter</Link>
      <Outlet />
    </div>
  );
};
