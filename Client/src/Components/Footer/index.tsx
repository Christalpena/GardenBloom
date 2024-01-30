import React from "react";
import "./Footer.css"


const Footer = () => {
    return(
        <footer className="footer">
           <div className="footer__container">
            <h4 className="footer__title">Social Media</h4>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>facebook</p>
            <p>Pinterest</p>
           </div>

           <div className="footer__container">
            <h4 className="footer__title">GardenBloom</h4>
            <p>About us</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <br />
           </div>

           <div className="footer__container">
            <h4 className="footer__title">Services</h4>
            <p>Flower Bouquet</p>
            <p>Wedding Boutquet</p>
            <p>Party Boutquet</p>
            <p>Flower Care</p>
           </div>
        </footer>
    )
};

export default Footer;