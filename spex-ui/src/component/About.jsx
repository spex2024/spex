import React from 'react';
import Features from "./Features.jsx";


function About() {
    return (
        <section className="w-full min-h-[60vh] lg:h-[75vh]  grid  grid-cols-1 lg:grid-cols-2 lg:px-10 px-10  gap-14 py-14 mt-24  lg:mb-20">

            <div className=" w-full flex flex-col items-start   gap-10 ">
                <h1 className="text-3xl font-bold text-gray-900 ">About Spex</h1>
                <p className="lg:text-md text-gray-900  mb-3 leading-loose text-start">
                    Spex is more than just a meal delivery service; we're your partner in sustainability. Our mission is
                    to reduce single-use packaging waste while offering a seamless dining experience for organizations
                    like yours. By leveraging cutting-edge technology, we've crafted an eco-friendly solution that
                    benefits both your staff and the planet.
                </p>




            </div>
            <div className=" full flex flex-col    gap-10">
                <h1 className="text-3xl font-bold text-gray-900 ">  Here's what sets us apart: </h1>
                <Features />
            </div>

        </section>
    );
}

export default About;