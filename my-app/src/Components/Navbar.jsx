const pages = ['Home','Browse', 'Search', 'About','Contact'];


function NavLinkPage({title}){
    const textHash = '#';
    return (
        <div className='listItem'>
            <a href={textHash.concat(title)}>{title}</a>
        </div>
    )
}

export default function Navbar(){
    const pagesItems = pages.map(page => <NavLinkPage title={page}/>)
    return (
        <div className='topnav'>
            {pagesItems}
        </div>
    )
}