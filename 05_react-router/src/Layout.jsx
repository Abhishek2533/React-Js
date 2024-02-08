import React from 'react'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Header />
            <Outlet />      {/* this provides that where the outlet is define, only that will be change and the rest will remain same all over the page*/}
            <Footer />
        </>
    )
}
