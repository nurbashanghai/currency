// Libs
import { AppShell } from '@mantine/core';
import React from 'react';

// Custom components and functions
import Footer from './footer';
import Header from './header';
import Sidebar from './sidebar';


const Layout = ({ children }: any) => {
  return (
    <div className='container mx-auto p-10' >
      <div className='rounded-3xl  bg-slate-100 bg-white h-[80vh] w-[85vw] shadow-2xl' >
        <AppShell
          classNames={{ main: "p-8" }}
          navbar={<Sidebar />}
        >
          <Header/>
          {children}
        </AppShell>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;