import React, { useState } from 'react';
import { accordionItems } from '../../Data/Accordion';
import './accordion.scss';

const Accordion = () => {
    const [active, setActive] = useState([]);
    const [rearrangeItems, isRearrangeitems] = useState(true);

    const toggleElement = (el) => {
        if (active.includes(el)) {
            const expandedItems = active;
            expandedItems.splice(expandedItems.indexOf(el), 1);
            setActive(expandedItems);
            isRearrangeitems(!rearrangeItems);
        } else {
            setActive([el]);
        }
    };

    const urlify = (text) => {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

        if (!!text.match(urlRegex)?.length) {
            return (
                <a href={text.match(urlRegex)[0]} target="_blank" rel="noreferrer">
                    {text.match(urlRegex)[0]}
                </a>
            );
        } else return text;
    };

    return (
        <div className="accordion-wrapper">
            <h1 data-aos="fade">FAQ</h1>
            <div className="accordion">
                {accordionItems?.map((item) => {
                    return (
                        <div key={item.id} className={`contentBx ${active.includes(item?.id) && 'active'}`}>
                            <div className="label" onClick={(e) => toggleElement(item?.id)} data-aos="fade">
                                {item.title}
                            </div>
                            <div className="content">
                                {item.answer?.split('\n').map((str) => (
                                    <p>{urlify(str)}</p>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Accordion;
