import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default AppLayout;

// Header
//   -logo
//   - Nav items
// Body
//    - search
//    - restro <Container></Container>
// // footer
//       -copyright
//       - Link
//       - Adreess
