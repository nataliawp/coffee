import React from "react";
import Header from "../components/header/Header";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <main className="dark:bg-[#191718] bg-[#F8D4B4] sm:pt-24">
      <Header />
      <div className="min-h-dvh w-full">
        <div className={className}>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
