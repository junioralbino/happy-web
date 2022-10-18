import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Rotas(){
    return(
        <Router>
          <Routes>
             <Route path='/'  element={<Landing />} /> 
          </Routes>
          <Routes>
              <Route path='/app' element={<OrphanagesMap />} /> 
          </Routes>
         </Router> 
    );
}

export default Rotas;