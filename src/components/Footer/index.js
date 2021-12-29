import React from 'react';
import Logo from '../../img/logo.png';


function Footer() {
    return (
        <>
            <footer>
                <div className='grid grid-cols-1 md:grid-cols-3 bg-black text-white p-4'>
                    <div className='col-2 flex items-center mx-auto'>
                        <a href='/'>
                            <img src={Logo} className="w-20 md:w-132px" alt='Logo'/>
                        </a>
                    </div>
                    <div className=' col-2 flex items-center justify-center'>
                            <h3 className="flex items-center justify-center uppercase text-gray-500 font-bold text-xs tracking-widest m-5 ">Sobre</h3>
                            <h3 className="flex items-center justify-center uppercase text-gray-500 font-bold text-xs tracking-widest m-5">Empregos</h3>
                            <h3 className="flex items-center justify-center uppercase text-gray-500 font-bold text-xs tracking-widest m-5">Links Úteis</h3>
                    </div>
                    <div className='col-2'>
                        <ul className='flex items-center justify-center'>
                            <li><a href='https://www.instagram.com/academia.vo2max/' target="_blank"><i className='flex items-center justify-center text-gray-500 w-12 h-12 roudend-full houver:text-gradiente1 mx-2 fab fa-instagram'></i></a></li>
                            <li><a href='https://www.facebook.com/CTAF.VO2MAX' target="_blank"><i className='flex items-center justify-center text-gray-500 w-12 h-12 roudend-full houver:text-gradiente1 mx-2 fab fa-facebook'></i></a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=5599984357125&text=Ol%C3%A1%2C%20me%20interessei%20pelos%20servi%C3%A7os!" target='_blank'><i className='flex items-center justify-center text-gray-500 w-12 h-12 roudend-full houver:text-gradiente1 mx-2 fab fa-whatsapp'></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;