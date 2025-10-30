import "./HeroSection.css";
import { FaPhone } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <>
      <section>
        <div className="section-overlay"></div>
        <div className="section-container">
          <div className="section-container-in">
            <h1>
              Biz Bilan Biznesingizni <br /> Rivojlantiring
            </h1>
            <div className="pp">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                dignissimos iste nam velit id, tenetur officia, labore
                blanditiis harum natus laboriosam, at nobis magnam ut assumenda
                in numquam deleniti exercitationem veniam. Quia perspiciatis
                fugiat ullam, nihil quasi eligendi illum modi assumenda minus
                distinctio sint consequuntur nam sequi iure quos reiciendis!
              </p>
            </div>
            <div className="section-button">
              <a href="https://t.me/Oga_Dobry07" rel="noopener noreferrer">
                <button>
                  <FaPhone className="section-button-i" /> Bog'lanish
                </button>   
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
