import React from "react";
import { Button } from "antd";
import { RouterProvider } from "react-router-dom";
import { Router } from "./utils/router";

const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};
export default App;
