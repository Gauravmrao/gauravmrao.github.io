import React from 'react';
import './home.css';

function Home() {
    return(
        <div>
            <head>
                <title> Gaurav Home </title>
            </head>
            
            <body> 
                <div className='home1'>

                    <h1 className='myName'>
                        Hi, I'm Gaurav Rao!
                    </h1>

                    <h3 className='myTag'>
                        I'm a CS and Econ student at UNC Chapel Hill.
                    </h3>

                    <p className='myDescription'>
                        Some of my hobbies include photography, kayaking, graphic design, and browsing Pinterest for aesthetic inspiration.
                    </p>


                </div>
            </body>
        </div>
    )
}


export default Home;