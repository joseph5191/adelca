import React from "react";

export default function Breadcrumb({children}) {
  return (
    <div className="bc-icons pb-4 ">
      <ol className="breadcrumb  lighten-4 ">
        {children}
      </ol>
    </div>
  );
}
