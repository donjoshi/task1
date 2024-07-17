import React from 'react'
import './expand.css'
import { useState } from 'react';



const AccordionItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default function Expand() {


    const faqItems = [
        {
            title: 'Why should I use this service?',
            content: 'A one-time secret is a link that can only be accessed once before it self-destructs.'
        },
        {
            title: 'Who is it for?',
            content: 'End-to-end encryption ensures that your secret is encrypted on your device and only decrypted on the recipient’s device.'
        },
        {
            title: 'How does the service work?',
            content: 'Yes, the basic service is free to use for everyone.'
        },
        {
            title: 'Can I get notified when a secret has been viewed?',
            content: 'Yes, the basic service is free to use for everyone.'
        },
        {
            title: 'How secure is this service',
            content: 'Yes, the basic service is free to use for everyone.'
        },
        {
            title: 'Can I retrieve a secretthat has already been visited?',
            content: 'Yes, the basic service is free to use for everyone.'
        },
        {
            title: 'Can the recipient save the message?',
            content: 'Yes, the basic service is free to use for everyone.'
        }
    ];

    return (
        <div className="accordion">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
        </div>
    )
}
