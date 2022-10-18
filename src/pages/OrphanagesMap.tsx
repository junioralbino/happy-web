import Local from '../images/Local.svg';

import '../styles/pages/orphanages-map.css';
import { MapContainer, TileLayer  } from 'react-leaflet';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';

function OrphanagesMap(){
    return(
       <div id="page-map">
         <aside>
            <header>
                <img src={Local} alt="Local happy" />

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
               <strong>Rio do Sul</strong>
               <span> Santa Catarina</span>
            </footer>
         </aside>

         <MapContainer center={[-27.2056602, -49.6932558,]} zoom={15} style={{ width:'100%', height:'100%' }} >
           <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         </MapContainer>

         <Link to="/app" className='create-orphanage'><FiPlus size={32} color="#fff" /></Link>
       </div>
    )
}

export default OrphanagesMap;