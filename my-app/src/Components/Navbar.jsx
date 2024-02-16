import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom'


const pages = ['Home','Browse', 'Search', 'About','Contact'];


function NavLinkPage({title}){
    const textHash = '/';
    return (
        <div className='listItem'>
            <NavLink to={textHash.concat(title)}>{title}</NavLink>
            <Outlet/>
        </div>
    )
}

export default function Navbar(){
    const pagesItems = pages.map(page => <NavLinkPage title={page}/>)
    return (
        <div className='topnav'>
            <NavLink to={"/"}>Home</NavLink>
            {pagesItems}
        </div>
    )
}