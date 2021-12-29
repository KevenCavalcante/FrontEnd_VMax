import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Dicas = () => {
    return(
        <>
            <Header/>
            <div className="bg-gradiente1 pt-10 lg:pb-10">
            <div class="text-center font-semibold pt-20">
                    <h1 class="text-5xl ">
                        <span class="text-white tracking-wide">Dicas e </span>
                        <span>Curiosidades</span>
                    </h1>
                </div>
                <div className="px-4 ">
                    {/* Visão */}
                    <div className='flex flex-row justify-center items-center max-w-full lg:grid lg:grid-cols-2 lg:mt-16'>
                        <div className="">
                            <img className="lg:inset-0 h-60 w-full lg:h-full object-center lg:rounded" src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Woman workcation on the beach" />
                        </div>
                        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                            <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                                <span className="block">Dica 1</span>
                            </h2>
                            <p className="text-gray-300 mt-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    {/* Missão */}
                    <div className='flex flex-row justify-center items-center max-w-full lg:grid lg:grid-cols-2 lg:mt-16'>
                    <div className="">
                            <img className="lg:inset-0 h-60 w-full lg:h-full object-center lg:rounded" src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Woman workcation on the beach" />
                        </div>
                        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                            <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                                <span className="block">Dica 2</span>
                            </h2>
                            <p className="text-gray-300 mt-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    {/* Valores */}

                    <div className='flex flex-row justify-center items-center max-w-full lg:grid lg:grid-cols-2 lg:mt-16'>
                        <div className="">
                            <img className="lg:inset-0 h-60 w-full lg:h-full object-center lg:rounded" src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Woman workcation on the beach" />
                        </div>
                        <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
                            <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
                                <span className="block">Dica 3</span>
                            </h2>
                            <p className="text-gray-300 mt-5">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Dicas;