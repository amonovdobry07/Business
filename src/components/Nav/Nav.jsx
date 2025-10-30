
import { useState } from "react";
import "./Nav.css"
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Nav = () => {
    const [show, setshow] = useState(true)
    return (
        <nav>
            {/* Desktop0 */}
            <div className="desktop-container">
                <div className="desktop-logo">
                    <h1>
                        Amonoff
                    </h1>
                </div>
                <div className="desktop-ul-links">
                    <ul>
                        <a href="#"><li>Bosh Sahifa</li></a>
                        <a href="#kurs"><li>Kurs</li></a>
                        <a href="#mijozlar"><li>Mijozlar</li></a>
                        <a href="#manzil"><li>Manzil</li></a>
                    </ul>
                </div>
                <div className="desktop-lang-provider">
                    <select name="" id="">
                        <option value="uz">🇺🇿 Uzbek</option>
                        <option value="ru">🇷🇺 Russian</option>
                        <option value="en">🇬🇧 English</option>
                    </select>
                </div>

            </div>
            {/* Mobile */}

            <div className="mobile-back">
                <div className="mobile-container">
                    <div className="mobile-logo">
                        <h1>
                            Amonoff
                        </h1>
                    </div>
                    <div className="mobile-bars" onClick={() => setshow(!show)}>
                        {show ? <FaBarsStaggered className="mobile-icons" /> : <MdOutlineClose className="mobile-icons" />}
                    </div>
                </div>
                <div className={show ? "nav-links" : "nav-links nav-active "}>
                    <ul>
                        <a href=""><li>Home</li></a>
                        <a href=""><li>About</li></a>
                        <a href=""><li>Service</li></a>
                        <a href=""><li>Projects</li></a>
                    </ul>
                    <div className="mobile-lang-provider">
                        <select name="" id="">
                            <option value="uz">🇺🇿 Uzbek</option>
                            <option value="ru">🇷🇺 Russian</option>
                            <option value="en">🇬🇧 English</option>
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    )
}



export default Nav; 