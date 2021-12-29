import React, { useState } from 'react';

import api from '../../services/api';

const Admin = () => {
    const [ credenciais, setCredenciais ] = useState({
        usuario: '',
        senha: '',
    });

    const Login = async () => {
        try {
            
            const response = await api.post('/admin/login', credenciais);
            const res = response.data
            if(res.error) {
                alert(res.message);
                return false;
            }

            localStorage.setItem('@user', JSON.stringify(res.admin))
            window.location.reload();

            console.log(response);

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <div className="bg-black flex">
            <div className="flex-col flex ml-auto mr-auto items-center w-full h-full lg:w-2/3 md:w-3/5 mt-20 pb-20">
                <h1 className="font-bold text-2xl my-10 text-white"> Acesso Administração</h1>
                <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
                    <div className="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span
                                className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
                            >
                                <i className="fas fsetr-circle"></i>
                            </span>
                        </div>
                        <input
                            type="text"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
                            placeholder="Email"
                            onChange={(e) => {
                                setCredenciais({
                                    ...credenciais,
                                    email: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <div className="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
                        <div className="flex -mr-px justify-center w-15 p-4">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-lock"></i>
                            </span
                            >
                        </div>
                        <input
                            type="password"
                            className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
                            placeholder="Senha"
                            onChange={(e) => {
                                setCredenciais({
                                    ...credenciais,
                                    senha: e.target.value,
                                })
                            }}
                        />
                        <div className="flex -mr-px">
                            <span
                                className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600"
                            >
                                <i className="fas fa-eye-slash"></i>
                            </span>
                        </div>
                    </div>
                    <a href="#" className="text-base text-white text-left font-roboto leading-normal hover:underline mb-6">Recuperar Senha</a>
                    <a
                        href="#"
                        className="bg-gradiente1 py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight text-xl md:text-base font-sans mt-4 mb-20"
                        onClick={Login}
                    >
                        Entrar
                    </a>
                </form>
            </div>
        </div>

    );
}

export default Admin;