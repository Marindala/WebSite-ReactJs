import ImWhatsapp from "../../assets/whatsapp.svg";
import "./ButtonW.css";

const ButtonW = () => {

  return (
    <div className="container-whats">
      <a
        href="https://api.whatsapp.com/send/?phone=5491156248017&text&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={ImWhatsapp} width={60} height={60}  className="whatsApp"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default ButtonW;
