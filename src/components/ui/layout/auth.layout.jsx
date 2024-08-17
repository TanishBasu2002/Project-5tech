import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[url('./src/assets/background.svg')] w-full flex justify-center items-center min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
