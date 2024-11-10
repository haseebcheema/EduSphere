import React from "react";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="w-60 h-screen p-5 bg-red-400">
      <nav className="bg-green-400">
        <ul className="flex flex-col gap-2 p-5">
          <li className="bg-yellow-300">School Management</li>
          <li>Feedbacks</li>
          <li>Settings</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
