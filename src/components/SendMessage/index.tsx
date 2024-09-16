import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import send from "../../assets/images/send.png";
import "./partials/index.css";

const FormMessage = () => {

  return (
    <div>
      <div className="mx-4 lg:mx-64 my-36 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="mb-6 lg:mb-0">
          <img className="w-32 lg:w-full" src={send} alt="send" />
        </div>
        <div className="font-nunito flex flex-col items-center lg:items-start">
          <h1 className="font-semibold text-lg lg:text-xl mb-4 lg:mb-5 text-center lg:text-left">Envie uma mensagem para nós!</h1>
          <a href="https://wa.me/message/QARISXNI7QJAH1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="mt-4 rounded-full p-4 bg-green-400 flex items-center transform hover:scale-105 duration-300">
              <FaWhatsapp className="text-3xl text-white" />
              <p className="text-md font-nunito font-extrabold text-white ml-2">WHATSAPP</p>
            </div>
          </a>
          <a href="https://www.instagram.com/gv.odontologiaesaude?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="mt-4 instagram rounded-full flex items-center transform hover:scale-105 duration-300 p-4">
              <FaInstagram className="text-3xl text-white" />
              <p className="text-md font-nunito font-extrabold text-white ml-2">INSTAGRAM</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/gislaine-vieira-155669267/?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <div className="mt-4 bg-[#0e76a8] rounded-full flex items-center transform hover:scale-105 duration-300 p-4">
              <FaLinkedin className="text-3xl bg-white text-[#0e76a8]" />
              <p className="text-md font-nunito font-extrabold text-white ml-2">LINKEDIN</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormMessage;
