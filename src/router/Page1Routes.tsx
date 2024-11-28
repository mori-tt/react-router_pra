import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  { path: "detailA", children: <Page1DetailA /> },
  { path: "detailB", children: <Page1DetailB /> },
];
