import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkCompoentProps {
  children: ReactNode;
  path: string;
}

function LinkCompoent({ children, path }: LinkCompoentProps) {
  return <Link to={path}>{children}</Link>;
}

export default LinkCompoent;
