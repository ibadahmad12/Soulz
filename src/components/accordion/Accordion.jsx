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
    return (
        <div className="accordion-wrapper">
            <h1>FAQ</h1>
            <div className="accordion">
                {accordionItems?.map((item) => {
                    return (
                        <div className={`contentBx ${active.includes(item?.id) && 'active'}`}>
                            <div className="label" onClick={(e) => toggleElement(item?.id)}>
                                {item.title}
                            </div>
                            <div className="content">
                                {item.answer?.split('\n').map((str) => (
                                    <p>{str}</p>
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
