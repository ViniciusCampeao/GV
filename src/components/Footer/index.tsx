import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020212] py-6 sm:py-10">
      <div className="flex flex-col items-center">
        <div className="flex space-x-4 sm:space-x-6 mb-4">
          <a
            href="https://wa.me/message/QARISXNI7QJAH1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <div className="bg-white w-10 h-10 sm:w-11 sm:h-11 text-center rounded-full flex items-center justify-center transform hover:scale-105 duration-300">
              <FaWhatsapp className="text-2xl sm:text-3xl text-[#020212]" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/gislaine-vieira-155669267/?originalSubdomain=br"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <div className="bg-white w-10 h-10 sm:w-11 sm:h-11 text-center rounded-full flex items-center justify-center transform hover:scale-105 duration-300">
              <FaLinkedin className="text-2xl sm:text-3xl text-[#020212]" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/gv.odontologiaesaude?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="bg-white w-10 h-10 sm:w-11 sm:h-11 text-center rounded-full flex items-center justify-center transform hover:scale-105 duration-300">
              <FaInstagram className="text-2xl sm:text-3xl text-[#020212]" />
            </div>
          </a>
        </div>
        <p className="text-white text-center text-sm sm:text-base">
          Av. Domingos Perino, 1084 - Vila Perino, Ourinhos - SP, 19911-781
        </p>
        <p className="text-gray-600 text-center mt-3 text-xs sm:text-sm">
          © {currentYear} GV Odontologia & Saúde
        </p>
      </div>
    </footer>
  );
};

export default Footer;
