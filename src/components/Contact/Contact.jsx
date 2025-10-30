
import "./Contact.css"
import { SiInstagram } from "react-icons/si";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="Contact" id="manzil">
            <div className="contact-container">
                <div className="contact-left-links">
                    <div className="network"><h3> Ijtimoiy Tarmoqlar </h3></div>
                    <div className="network-links">
                        <ul>
                            <a href="">
                                <li><SiInstagram className="contact-icon" /></li>
                            </a>

                            <a href="">
                                <li><RiTelegram2Fill className="contact-icon" /></li>
                            </a>

                            <a href="">
                                <li><FaFacebook className="contact-icon" /> </li>
                            </a>
                        </ul>
                    </div>
                    <form action="" className="forma">
                        <input type="text" placeholder="Sizning Ismingiz:" className="contact-input" />
                        <input type="text" placeholder="Sizning Emailingiz:" className="contact-input" />
                        <textarea name="" id="contact-textArea" className="contact-input" placeholder="Xabar Yozmoq" >

                        </textarea>
                        <button className="contact-button">
                            Yuborish
                        </button>
                    </form>
                </div>
                <div className="contact-right-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6132.746614185117!2d64.444337!3d39.776177!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ2JzM0LjIiTiA2NMKwMjYnMzkuNiJF!5e0!3m2!1sru!2s!4v1761821235702!5m2!1sru!2s"></iframe>
                </div>
            </div>
        </div>
    )
}


export default Contact; 