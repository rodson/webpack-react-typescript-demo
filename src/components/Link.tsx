import React, { ReactNode } from "react";
const Link = ({ page }: { page: string, children?: ReactNode }) => {
  return (
    <a
      className="normal"
      href={page}
      onMouseEnter={() => console.log("Mouse enter")}
      onMouseLeave={() => console.log("Mouse leave")}
    >
      My Domain
    </a>
  );
};
export default Link;