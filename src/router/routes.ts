import Home from "./Home";

interface RouteItemType {
  path: string,
  component: React.FC
}

const routes: RouteItemType[] = [
  {
    path: "/",
    component: Home,
  }
];

export default routes;
