import Slider from '../../components/slider/index';
import React from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Container from '../../components/container';
function homepage() {
    return (
        <div>
            <Navbar/>
            <Slider/>
            <Container/>
            <Footer/>
        </div>
    )
}

export default homepage
