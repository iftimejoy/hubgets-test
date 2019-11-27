import React from 'react';
import { Link } from 'react-router-dom';

import iconFlux from "../assets/icon-02.png";
import iconMsg from "../assets/icon-03.png";
import iconManager from "../assets/icon-04.png";
import iconHelp from "../assets/icon-05.png";


const FacilityUser = () => (
    <div>
        <div className="content__article">
            <article className="content__article--features">
                <img src={iconFlux} alt="Centralize" />
                <p>Centralizes communication channels and reduces overhead.</p>
            </article>
            <article className="content__article--features">
                <img src={iconMsg} alt="Communication Tools" />
                <p>Brings together instant messaging, voice and video communication in the browser.</p>
            </article>
            <article className="content__article--features">
                <img src={iconManager} alt="Information Manager" />
                <p>Captures information across the organization, retains the knowledge, anlizes and improves it.</p>
            </article>
            <article className="help">
                    <img src={iconHelp} alt="Help" />
                    <div>                
                        <p>+1 845 894 123</p>
                        <Link to="/company/contact"> help@hubgets.com</Link>
                    </div>              
            </article>                  
        </div>
    </div>          
);

export default FacilityUser;