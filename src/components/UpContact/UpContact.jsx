
import "./UpContact.css"
import { PiChartLineUp } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const UpContact = () => {
    return (
        <div className="UpContact">
            <div className="UpContact-container">

                <div className="UpContact-box">
                    <div className="UpContact-left-icon">
                        <PiChartLineUp />
                    </div>

                    <div className="UpContact-right-text">
                        <h3>Rivojlaning</h3>
                        <p>Biz Bilan Yuqori Cho'qqigacha</p>
                    </div>
                </div>
                {/* box 2 */}
                <div className="UpContact-box">
                    <div className="UpContact-left-icon">
                        <FaHandshake />
                    </div>

                    <div className="UpContact-right-text">
                        <h3>Ishonchli Hamkorlik</h3>
                        <p>Biz bilan barqaror rivojlaning</p>
                    </div>
                </div>
                {/* box 3 */}
                <div className="UpContact-box">

                    <div className="UpContact-left-icon">
                        <FaRocket />
                    </div>

                    <div className="UpContact-right-text">
                        <h3>Tez Natijalar</h3>
                        <p>Qisqa vaqt yuqori samaradorlik</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpContact; 