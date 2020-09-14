import React from 'react';
import '../App.css';
import {Button} from './button';
import './HeroSection.css';



function HeroSection(){
    return(
        <div className='hero-container'>
           {/*<!--<video src='/videos/video-2.mp4' autoPlay loop muted/>-->*/}
            <h1>Unsplash</h1>
            <p>Create with the largest open collection of high-quality photos for free.</p>
            <div className='hero-btns'>
            <input
        type="text"
        
      />
     
                <Button className='btns'
                buttonStyle='btn-primary'
                buttonSize='btn-large'>Search
                </Button>

            </div>
        </div>
    );
        
    
}
export default HeroSection;