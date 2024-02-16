import { Outlet,  } from "react-router-dom";
import { NavLink } from 'react-router-dom'

//returns individual page titles for navbar
//returns Navlink to page title for each page 
function NavLinkPage({pagetitle}){
    const textHash = '/';
    return (
        <div className='listItem'>
            <NavLink to={textHash.concat(pagetitle)}>{pagetitle}</NavLink>
            <Outlet/>
        </div>
    )
}

//returns navbar
//iterates through list of pagetitles and calls NavLinkPage for all iterations
export default function Navbar({pages}){
    const pagesItems = pages.map(page => <NavLinkPage pagetitle={page}/>)
    return (
        <div className='topnav'>
            {pagesItems}
        </div>
    )
}