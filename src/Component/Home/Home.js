import React from 'react';
import './Home.css';

import main from '../../Assets/Main1.png';
import advantage from '../../Assets/advantage.png';
import services from '../../Assets/Service.png';
import footer from '../../Assets/Footer (1).png';
import Testimoni from '../../Assets/Testimoni.png';

function Home() {
    return (
        <>
            <div >
                <img src={main} alt="" className='main' />
            </div>
            <div >
                <img src={advantage} alt="" className='advantage' />
            </div>
            <div className='card'>
                <img src={Testimoni} alt="" className='Testimoni' />
            </div>

            <div >
                <img src={services} alt="" className='services' />
            </div>

            <dir >
                <img src={footer} alt="" className='footer' />
            </dir>
        </>
    );
}

export default Home;
