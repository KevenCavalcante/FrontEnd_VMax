import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Landing() {
    return (
        <di>
            <Header />
            <main>
                <div
                    class="flex flex-col justify-center text-center bg-spotify-theme-mobile py-40 px-4 md:bg-spotify-theme bg-banner-mobile md:bg-banner bg-195% md:bg-175% bg-gradient-to-r from-gradiente2 to-gradiente1 text-white">
                    <h1 class="text-5xl md:text-9xl mb-10 font-bold max-w-4xl mx-auto">Treinar Muda Tudo</h1>
                    <p class="text-md md:text-lg mb-10">Exercicios e acompanhamento profissional em todo seu percurso!</p>
                    <a href="#" class="bg-color-buttons hover:bg-white text-gradiente1 text-sm rounded-full px-10 py-3 uppercase font-bold max-w-xl mx-auto tracking-widest transition duration-500">Baixe o App Agora!</a>
                </div>
            </main>
            <Footer />
        </di>
    );
};

export default Landing;