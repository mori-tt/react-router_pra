import { Link, Outlet, useNavigate } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  const navigate = useNavigate();

  const onClickDetailA = () => navigate("detailA", { state: arr });

  return (
    <div>
      <h1>Page 1</h1>
      <nav>
        <ul>
          <li>
            {/* <button onClick={() => navigate("detailA", { state: arr })}>
              Detail A
            </button> */}
            <Link to="detailA" state={arr}>
              Detail A
            </Link>
          </li>
          <li>
            <Link to="detailB">Detail B</Link>
          </li>
          <li>
            <button onClick={onClickDetailA}>Detail A</button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
