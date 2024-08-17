import React from "react";
import { Topbar } from "../navigation/topbar";
import { Sidebar } from "../navigation/sidebar";

export const RootLayout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
        {children}
      </section>
    </div>
  );
};
