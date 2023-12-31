import "./Contacts.css"
import React from "react"
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import isEmail from 'validator/lib/isEmail';


const Contacts = () => {
    useEffect(() => emailjs.init(""), []);
    const [emailRef,setEmailRef] = useState('');
    const [nameRef, setNameRef] = useState('');
    const [messageRef, setMessageRef] = useState('');
    const [errorMsg, setErrorMsg] = useState({
        show: false,
        type: '',
        message: ''

    })

    // Add these
    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "";
        const templateId = "";
        if(isEmail(emailRef) && messageRef.length >=50 && nameRef.length >= 10){
            try {
                await emailjs.send(serviceId, templateId, {
                    name: nameRef,
                    recipient: emailRef,
                    message: messageRef
                });
                setErrorMsg({
                    show:true,
                    type: "success",
                    message: "Email successfully sent check inbox"
                });
              } finally {
              }
        }else{
            setErrorMsg({
                show:true,
                type: "error",
                message: "Please ensure that your name is a minimum of 10 characters, the message spans at least 50 characters, and verify the accuracy of your email input."
            });

        }
    };

    return(
        <section className="contacts">
            <div className="contacts__background">
                <div className="contacts__p">
                    <h1 className="contacts__pageTitle">Contact Us</h1>
                </div>
            </div>
            <div className="contacts__information">
                <div className="contacts__container">
                    <h2 className="contacts__title">Hours of operation</h2>
                    <p>Mon-Frid, 8:00AM to 5:00PM </p>
                </div>
                <div className="contacts__container">
                    <h2 className="contacts__title">Phones</h2>
                    <p>809-879-5133</p>
                </div>

                <div className="contacts__container">
                    <h2 className="contacts__title">Gmails</h2>
                    <p>christalperez0@gmail.com</p>
                </div>
            </div>
            <div className="contacts__phrases">
                <p>Our dedicated customer support team is ready to assist you. Whether you have questions about our products, need help with an order, or just want to talk flowers, we're here for you.</p>
                <h3>Let us bring the magic of flowers to YOU</h3>
            </div>
            <form className="contacts__form" onSubmit={handleSubmit}>
            <hr />

            <div className="contacts__form-group">
                { errorMsg.show ?                 
                    <div className={`contacts__errorMsg contacts__errorMsg-${errorMsg.type}`}>
                        {errorMsg.message}
                    </div> 
                : <></>
                }
                <label className="contacts__label" htmlFor="name">name</label>
                <input id="name" className="contacts__input" value={nameRef} onChange={(e) => setNameRef(e.target.value)}  placeholder="Enter your name" required />


                <label className="contacts__label" htmlFor="email">email</label>
                <input id="email" className="contacts__input" value={emailRef} onChange={(e) => setEmailRef(e.target.value)}  type="email" placeholder="Enter your email" required />

                <label className="contacts__label" htmlFor="Message">Message</label>
                <textarea id="Message" value={messageRef} onChange={(e) => setMessageRef(e.target.value) }  placeholder="Enter your message" className="contacts__message" required />

                <button className="contacts__btn">
                Sent
                </button>
            </div>
            </form>
        </section>
    )
};

export default Contacts;
