import React from 'react';
import Hero from "../component/Hero.jsx";
import About from "../component/About.jsx";
import CallToAction from "../component/Action.jsx";
import Footer from "../component/Footer.jsx";

function Home(props) {
    return (
        <main className=" w-full flex min-h-screen flex-col items-center justify-between lg:px-10 py-5  ">
            <Hero/>
            <About/>
            <CallToAction/>
            <Footer/>

        </main>
    );
}

export default Home;