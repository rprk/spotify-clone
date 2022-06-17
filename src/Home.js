import React from 'react';
import './home.css';
import Sidebar from './Sidebar.js';
import Body from './Body.js';
import Footer from './Footer.js';

 function Home({spotify}){
    return(
        <div className='home'>
            <div className='home_body'>
                <Sidebar/>
                 <Body spotify={spotify}/>
            </div>
            <Footer/>
        </div>

    );
}

export default Home;