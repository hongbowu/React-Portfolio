import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
    const currentPage = useLocation().pathname;
    return(
        <>
        <h1 className='username'>Hongbo Wu</h1>
        <h2>Resume</h2>
        <ul>
            <li>
              <Link
                to='/' >
                    About Me
                </Link>
            </li>
            <li>
            <Link
                to='/Portfolio' >
                    Portfolio
                </Link>
            </li>
            <li>
            <Link
                to='/Contact' >
                    Contact
                </Link>
            </li>
            <li>
            <Link
                to='/Resume' >
                    Resume
                </Link>
            </li>
        </ul>
        </>
    )
    
    
}