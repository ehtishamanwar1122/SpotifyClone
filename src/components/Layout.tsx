
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Player from './Player';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-spotify-dark">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-0">
          {children}
        </main>
      </div>
      <Player />
    </div>
  );
};

export default Layout;
