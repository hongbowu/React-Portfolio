import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;
    return(
        <>
        <h1 className='username'>Hongbo Wu</h1>
        <h2>Resume</h2>
        <ul>
            <li className={currentPage === '/' ? 'active' : ''}>
              <Link className='no-underline'
                to='/' >
                    About Me
                </Link>
            </li>
            <li className={currentPage === '/Portfolio' ? 'active' : ''}>
            <Link className='no-underline'
                to='/Portfolio' >
                    Portfolio
                </Link>
            </li>
            <li className={currentPage === '/Contact' ? 'active' : ''}>
            <Link className='no-underline'
                to='/Contact' >
                    Contact
                </Link>
            </li>
            <li className={currentPage === '/Resume' ? 'active' : ''}>
            <Link className='no-underline'
                to='/Resume' >
                    Resume
                </Link>
            </li>
        </ul>
        </>
    )
    
    
}