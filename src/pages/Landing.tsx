import React from 'react';
import'../styles/pages/landing.css';

import { Link } from 'react-router-dom';

import { FiArrowRight} from 'react-icons/fi';
import logoImg from '../images/Logo.svg';

function Landing(){
    return( 
        <div id="page-landing">
        <div className="content-wrapper">
           <img src={logoImg} alt='Happy' />
 
           <main>
             <h1>Leve a felicidade para o mundo</h1>
             <p>Visite os orfanatos e mude o dia muitas crianças.</p>
           </main>
 
           <div className="location">
             <strong>Rio do Sul</strong>
             <span>Santa Catarina</span>
           </div>
 
           <Link to="/app" className='enter-app'>
             <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
           </Link>
        </div>
     </div>
    );
}

export default Landing;