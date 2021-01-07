import { Link } from "react-router-dom";
import styles from "./Link.module.scss";

interface LinkType {
  to: string;
  target: "_self" | "_blank";
}

const MyLink: React.FC<LinkType> = ({ to, target = "_self", children }) => (
  <Link to={to} target={target}>
    {children}
  </Link>
);

export default MyLink;
