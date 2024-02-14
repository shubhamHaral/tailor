import React from 'react';
import './Text.css';
import { FaArrowRight } from "react-icons/fa";

const text = () => {
    return (
        <>
            <section >
                <div className='introContent'>
                    <span className='hello'>Make your</span>
                    <span className='introText'> <br /> dream<span className='introName' > clothes</span><br />here</span>
                </div>
            </section>
            <div className='div'>
                <p>You can request your own model or <br />the one I have provided</p>
                <button><span class="btn2">Get strted <FaArrowRight /></span></button>

            </div>

        </>
    )
}

export default text;


