import React from 'react';
import Logo from '../../img/logo.png';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <>
            <header>
                <div className="flex fixed bg-black w-full px-3 md:px-20 py-4">
                    <div className="container flex items-center mx-auto">
                        <div>
                            <a href="/">
                                <img src={Logo} alt="Spotify" className="w-15 md:w-125px" />
                            </a>
                        </div>
                        <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                            <i className="fas fa-bars"></i>
                        </div>
                        <div className="items-end flex-1 text-white font-bold hidden md:flex">
                            <nav className="flex-1">
                                <ul className="flex justify-end flex-1">
                                    <li className="px-4">
                                        <a href="/academia" className="hover:text-gradiente1 text-sm">Acadêmia</a>
                                    </li>
                                    <li className="px-4">
                                        <a href="/espaco" className="hover:text-gradiente1 text-sm">Nosso Espaço</a>
                                    </li>
                                    <li className="px-4">
                                        <a href="/dicas" className="hover:text-gradiente1 text-sm">Dicas e Curiosidades</a>
                                    </li>
                                    <span className="border-r border-white"></span>
                                    <li className="px-4">
                                        <a href="/planos" className="hover:text-gradiente1 text-sm">Planos</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;