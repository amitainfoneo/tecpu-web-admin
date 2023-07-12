import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <>
    <Header />
    <main className='app-content'>
    <Outlet />
    </main>
    </>
  )
}

export default Layout