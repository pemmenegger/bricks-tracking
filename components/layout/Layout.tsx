import React from "react";
import BrickTower from "@/components/ui/BrickTower";
import { TimelineProvider } from "@/context/TimelineContext";
import Header from "@/components/ui/Header";
import Timeline from "@/components/ui/Timeline";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 p-4">
        <div className="flex gap-6">
          <div className="w-1/3 flex justify-center">
            <BrickTower />
          </div>
          <div className="w-2/3">{children}</div>
        </div>
      </main>
      <Timeline />
    </div>
  );
};

export default Layout;
