import { FiMapPin } from "react-icons/fi";
import { CiClock1 } from "react-icons/ci";
import desenho from "../../assets/images/desenho.png";

const FirstComponent = () => {
  return (
    <div className="
      bg-primary
      grid
      lg:grid-cols-2
      grid-cols-1
      gap-4
      px-6
      py-12
    ">
      <div className="
        text-white
        lg:ml-64 
        lg:mt-36 
        lg:mb-72
        pt-16
        flex
        flex-col
        justify-center
      ">
        <h1 className="
          font-extrabold
          text-2xl
          lg:text-3xl
          font-nunito
          mb-6
          lg:w-9/12
          w-full
        ">
          Seu sorriso merece o melhor cuidado. Transforme sua saúde bucal com a experiência e dedicação que você confia!
        </h1>
        <p className="mb-6">Não estamos satisfeitos com a média. Nosso objetivo é atendê-lo e tratá-lo com métodos criteriosos. Clinicamente, isso repercute na previsibilidade e na alta durabilidade do trabalho realizado.</p>
        
        <div className="
          flex
          flex-col
          lg:flex-row
          justify-between
          items-start
          lg:items-center
          mt-8
        ">
          <div className="flex items-center mb-4 lg:mb-0">
            <a target="_blank" href="https://www.google.com/maps/place/Av.+Domingos+Perino,+1084+-+Vila+Perino,+Ourinhos+-+SP,+19911-781/@-22.9660176,-49.8663417,18z/data=!4m15!1m8!3m7!1s0x94c019cd4ff2a31d:0xc615c1bc98c5d9d5!2sAv.+Domingos+Perino,+1084+-+Vila+Perino,+Ourinhos+-+SP,+19911-781!3b1!8m2!3d-22.9656512!4d-49.8656659!16s%2Fg%2F11vss0hy4x!3m5!1s0x94c019cd4ff2a31d:0xc615c1bc98c5d9d5!8m2!3d-22.9656512!4d-49.8656659!16s%2Fg%2F11vss0hy4x?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">
              <FiMapPin className="bg-white rounded-full text-primary h-8 w-8 p-1 transition hover:scale-110 duration-300" />
            </a>
            <p className="text-white ml-2">Vila Perino, Ourinhos - SP</p>
          </div>

          <div className="flex items-center">
            <a target="_blank" href="https://www.google.com/search?q=gv+odontologia+%26+saúde+ourinhos+horario+de+funcionamento&newwindow=1&client=opera&sca_esv=56a6e72bcd16fe02&sca_upv=1&biw=1438&bih=740&sxsrf=ADLYWILtr3qeh1-VjokVcnz04vnnos9lHg%3A1725949385126&ei=yeXfZrSzB9mi1sQPyPK0iAw&oq=gv+odontologia+%26+saúde+ourinhos+ho&gs_lp=Egxnd3Mtd2l6LXNlcnAiI2d2IG9kb250b2xvZ2lhICYgc2HDumRlIG91cmluaG9zIGhvKgIIADIFECEYoAEyBRAhGKABMgUQIRigATIFECEYoAEyBRAhGKABMgUQIRifBUi0FFAlWIcJcAF4AJABAJgBmAGgAbwDqgEDMC4zuAEDyAEA-AEBmAIDoALFA5gDAOIDBRIBMSBAiAYBkgcDMC4zoAeOEg&sclient=gws-wiz-serp">
              <CiClock1 className="bg-white rounded-full text-primary h-8 w-8 p-1 transition hover:scale-110 duration-300" />
            </a>
            <p className="text-white ml-2">09h30 - 17h30</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <img src={desenho} alt="desenho" />
      </div>
    </div>
  );
}

export default FirstComponent;
