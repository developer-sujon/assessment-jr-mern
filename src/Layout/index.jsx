//External Lib Import
import React from "react";

//Internal Lib Import
import AppNavigation from "./AppNavigation";

const index = ({ children }) => {
  return (
    <>
      <AppNavigation />
      {children}
    </>
  );
};

export default index;
