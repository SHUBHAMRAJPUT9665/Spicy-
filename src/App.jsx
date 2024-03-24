import React from "react"; 
import AppLayout from "./component/AppLayout";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AppLayout />
      <Toaster
  position="bottom-center"
  reverseOrder={false}
/>    </>
  );
}
export default App;
