import Header from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10"></div>
    </div>
  );
}

export default AppLayout