import React from 'react';
import RegisterUser from './RegisterUser';
import FacilityUser from './FacilitiesUser';
import MainHeader from './MainHeader';


const HomePage = () => (
    <div>
        <MainHeader />
        <section className="flex__section">
            <div className="content-container">
                <div className="flex__section--content">                    
                    <RegisterUser />    
                    <FacilityUser />
                </div>               
            </div>
        </section>        
    </div>
);

export default HomePage;