// components/Layout.tsx
import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import Nvaba from './Navbar'
import Navbar from "./Navbar";
const Layout = (props: PropsWithChildren) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div
      className={classNames({
        // 👇 use grid layout
        "grid min-h-screen": true,
        // 👇 toggle the width of the sidebar depending on the state
        "grid-cols-sidebar": !collapsed,
        "grid-cols-sidebar-collapsed": collapsed,
        // 👇 transition animation classes
        "transition-[grid-template-columns] duration-300 ease-in-out": true,
      })}
    >
      {/* sidebar */}
      <Sidebar 
        collapsed={collapsed}
        setCollapsed={() => setSidebarCollapsed((prev)=> !prev)}
        shown={showSidebar}
      />
      <div>
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)}/>
        {props.children}
      </div>
    </div>
  );
};
export default Layout;