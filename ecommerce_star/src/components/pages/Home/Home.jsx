import React from 'react'
import BackgroundPic from "./images/classic-blue-wall-living.jpg"
import "./Home.css"
import Button from '../../Button/button'


const Home = () => {
    const handleClick = () => {
        console.log('Button was clicked!');
    };
    return (
        <div className='maindivhome' >
            <div className='homeMain' style={{
                backgroundImage: `url(${BackgroundPic})`, width: '100vw', height: '100vh',
                backgroundSize: 'cover', objectFit: 'cover',
                display: 'flex', backgroundRepeat: 'no-repeat', alignItems: 'center', justifyContent: 'center'
            }}>
                <div class="square">
                    <img src="./images/logostar.png" alt="bug" height={100} />
                    <h1 class="text" style={{ color: '#00bbe2', fontSize: '4rem', justifyContent: 'center', alignItems: 'center' }}>Star Decor Kosova</h1>
                    <p class="text" style={{ color: 'black', fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptataute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>

                    <Button onClick={handleClick} style={{ backgroundColor: '#00bbe2', color: 'white', paddingTop: '1%', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                        Click Me!
                    </Button>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h1 class="h1-home-second-section">Clean and fragrant soy wax</h1>
                    <h3 class="h3-home-second-section">Made for your home and for your wellness</h3>
                    <p class="paragrafi-home-second-section">Eco-sustainable:All recyclable materials, 0% CO2 emissions</p>
                    <p class="paragrafi-home-second-section">Eco-sustainable:All recyclable materials, 0% CO2 emissions</p>
                    <p class="paragrafi-home-second-section">Eco-sustainable:All recyclable materials, 0% CO2 emissions</p>
                    <Button onClick={handleClick} style={{ backgroundColor: '#00bbe2', color: 'white', paddingTop: '1%', paddingBottom: '1%', paddingLeft: '5%', paddingRight: '5%' }}>
                        Click Me!
                    </Button>
                </div>

                <div class="column">
                    <img src="./images/logostar.png" alt="bug" height={300} />
                </div>
            </div>
        </div >
    )
}

export default Home