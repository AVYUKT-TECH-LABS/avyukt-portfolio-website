import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <article className="mt-[135px]">{children}</article>;
}

export default layout;
