import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/AppStore";
const AppLayout = () => {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>
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
