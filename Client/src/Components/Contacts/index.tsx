import "./Contacts.css"
import React from "react"
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
    useEffect(() => emailjs.init("eRbMgizLmOtEjqQq-"), []);
    const [emailRef,setEmailRef] = useState('');
    const [nameRef, setNameRef] = useState('');
    const [messageRef, setMessageRef] = useState('');

    // Add these
    const handleSubmit = async (e) => {
      e.preventDefault();
      const serviceId = "service_o5vb4x3";
      const templateId = "template_823kjnl";
      try {
        await emailjs.send(serviceId, templateId, {
            name: nameRef,
            recipient: emailRef,
            message: messageRef
        });
        alert("email successfully sent check inbox");
      } catch (error) {
        console.log(error);
      } finally {
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

                <label className="contacts__label" htmlFor="">name</label>
                <input className="contacts__input" value={nameRef} onChange={(e) => setNameRef(e.target.value)}  placeholder="Enter your name" />


                <label className="contacts__label" htmlFor="">email</label>
                <input className="contacts__input" value={emailRef} onChange={(e) => setEmailRef(e.target.value)}  type="email" placeholder="Enter your email" />

                <label className="contacts__label" htmlFor="">Message</label>
                <textarea value={messageRef} onChange={(e) => setMessageRef(e.target.value) }  placeholder="Enter your message" className="contacts__message" />

                <button className="contacts__btn">
                Sent
                </button>
            </div>
            </form>
        </section>
    )
};

export default Contacts;
