import React from 'react';
import FormModal from "./Form.jsx";


function CallToAction() {
    return (
        <section className={` mx-5 px-10 lg:w-[70%] h-[40vh] bg-gray-950 rounded-2xl flex flex-col gap-14  items-center justify-center text-white lg:px-20 mt-14 lg:mt-16 `}>

            <p className={`lg:text-2xl text-center font-bold  `}>
                Be part of the sustainable food packaging revolution! Together, we can make a difference, one smart pack at a time.
            </p>
            <div className=" lg:w-[20%] flex justify-center">

                <FormModal />
            </div>

        </section>
    );
}

export default CallToAction;