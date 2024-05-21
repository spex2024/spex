import React, { useState } from 'react';

const AccordionItem = ({ title, content , toggle}) => {
    return (
        <div
            className="  animate-fade duration-75   h-auto border-b border-gray-black dark:border-black flex  flex-col  items-start justify-center cursor-pointer bg-slate-50 px-2 py-2"
        >

            <p className="mb-2 text-sm lg:text-xl  rtl:text-right text-black" onClick={toggle}>{title}</p>
            <p className="mb-2 text-gray-500 dark:text-black text-start" onClick={toggle}>{content}</p>
        </div>
    );
};

const Features = () => {
    const accordionData = [
        {
            id: 'accordion-flush-body-1',
            title: ' 01 Smart Pack Exchange',
            content: [
                '          Say goodbye to single-use plastic containers. With Spex, your staff can easily return used packs and receive points in return, encouraging a culture of reusability and sustainability.'
            ]
        },
        {
            id: 'accordion-flush-body-2',
            title: '02 Carbon Points',
            content: [
                ' Reduce your carbon footprint with every pack exchange. Spex rewards your organization for environmentally-friendly practices, helping you contribute to a healthier planet.'
            ]
        },
        {
            id: 'accordion-flush-body-3',
            title: '03 Cost Savings',
            content: [
                '  Cut down on expenses associated with disposable packaging. Spex helps you save costs in the long run by promoting the use of reusable smart packs.'
            ]
        } ,
        {
            id: 'accordion-flush-body-4',
            title: '04 Food Ordering Made Easy',
            content: [
                'Simplify meal planning for your team. With Spex, you can conveniently order food for your organization and have it delivered in our smart, reusable packs, ensuring both convenience and sustainability.'
            ]
        },


    ];

    const [openAccordion, setOpenAccordion] = useState(null);

    const handleAccordionToggle = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div id="accordion-flush" data-accordion="collapse"
             data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
             data-inactive-classes="text-gray-500 dark:text-gray-400" className="w-full">
            {accordionData.map((item, index) => (
                <div key={index}>
                    {openAccordion !== index && (
                        <h2 id={`accordion-flush-heading-${index + 1}`}>
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full py-5 text-sm lg:py-8 lg:text-2xl font-serif rtl:text-right text-black border-b border-gray-200 dark:border-black dark:text-black gap-3 animate-fade`}
                                onClick={() => handleAccordionToggle(index)}
                                aria-expanded={openAccordion === index}
                                aria-controls={item.id}
                            >
                                <span>{item.title}</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 rotate-180 shrink-0`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                    )}

                    <div id={item.id}
                         className={`${openAccordion === index ? 'max-h-56' : 'max-h-0'}`}
                         aria-labelledby={`accordion-flush-heading-${index + 1}`}>
                        {openAccordion === index &&
                            <AccordionItem {...item} toggle={() => handleAccordionToggle(index)}/>}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Features;