import React from 'react';
import { useNavigate } from 'react-router-dom';


const HeaderComponent = () => {
    const navigator = useNavigate();

    function signup() {
        navigator('/register');
    }

    function contactUs() {
        navigator('/contact');
    }

    return (
        <div>
            <header>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3'>
                    <a className="navbar-brand" href="/employees">Employee Management System</a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <li className='nav-item m-2'>
                                <a className='nav-link' href='/home'>Home</a>
                            </li>
                            <li className='nav-item m-2'>
                                <a className='nav-link' href='/employees'>Employee</a>
                            </li>
                            <li className='nav-item'>
                                <button className='btn btn-primary m-2' onClick={contactUs}>Contact Us</button>
                            </li>
                            <li className='nav-item'>
                                <button className='btn btn-primary m-2' onClick={signup}>Sign In</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;
