import React from 'react';
import { useState } from 'react';

export default function Navbar(props) {
    const [darkMode, setdarkMode] = useState('light')

    const toogleMode = () => {
        if (darkMode === 'light') {
            document.body.style.backgroundColor = '#262525';
            document.body.style.color = 'white';
            setdarkMode('dark');
        }
        else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            setdarkMode('light');
        }
    }
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${darkMode} bg-${darkMode} px-2`}>
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"></a>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${darkMode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toogleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'} </label>
                </div>
            </nav>
        </>
    )
}
