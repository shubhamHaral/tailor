import React from 'react';
import './services.css';
import Group8 from '../../Assets/Group 8.png';
import Group9 from '../../Assets/Group 9.png';
import Group10 from '../../Assets/Group 10.png';
import Group11 from '../../Assets/Group 11.png';
const Services = () => {
    return (
        <>
            <div>
                <p className='serviceText'>Our Service</p>
                <p className='serText'>some of our featured services</p>
            </div>
            <div className='Group8'>
                <img src={Group8} alt="" />
            </div>
            <div className='Group9'>
                <img src={Group9} alt="" />
            </div>
            <div className='Group10'>
                <img src={Group10} alt="" />
            </div>    
             <div className='Group11'>
                <img src={Group11} alt="" />
            </div>
        </>
    )
}

export default Services;