import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import Landing from './pages/Landing';
import Academia from './pages/Academia';
import Dicas from './pages/DicaseCuriosidade';
import NossoEspaco from './pages/NossoEspaco';
import Planos from './pages/Planos';

import Admin from './pages/LoginAdmin';
import Personal from './pages/LoginPersonal';



function Router () {

    const logadoadmin = localStorage.getItem('@user');
    const logadopersonal = localStorage.getItem('@personal');
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Landing/>} />
                <Route path="/academia"  element={<Academia/>} />
                <Route path="/dicas"  element={<Dicas/>} />
                <Route path="/espaco"  element={<NossoEspaco/>} />
                <Route path="/planos"  element={<Planos/>} />

                {!logadoadmin &&  <Route path="/admin"  element={<Admin/>} />}
                {!logadopersonal && <Route path="/personal"  element={<Personal/>} />}

                {/* {logado && <Route path="/dashboard/admin"  element={<DashboardAdmin/>} />} */}



            </Routes>
        </BrowserRouter>
    );
};

export default Router;