import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul>
                <li>
                    <Link to='/' > Home </Link>
                </li>
                <li>
                    <Link to='/fetch'> Hack Rekrut </Link>
                </li>
                <li>
                    <Link to='/match'> Match Job Offers </Link>
                </li>
                <li style={{ float: 'right' }} >
                    <Link to='/'> SHIFTLESS </Link>
                </li>
            </ul>
        </div>
    );
};

export default React.memo(Navbar)