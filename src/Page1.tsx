import { Link, Outlet } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      <nav>
        <ul>
          <li>
            <Link to="detailA">Detail A</Link>
          </li>
          <li>
            <Link to="detailB">Detail B</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
