import { Link } from "react-router-dom";
import desenho from "../../assets/images/desenho2.png";

const Specialist = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:mx-52 mx-4 pb-10">
      <div className="lg:py-16 lg:pl-16">
        <img className="hidden lg:block w-11/12" src={desenho} alt="atendendo" />
      </div>
      <div className="flex flex-col justify-center font-nunito">
        <h1 className="font-extrabold text-3xl">Especialista</h1>
        <p className="font-light text-lg mt-5">Especialista em harmonização orofacial com toxina botulínica (HOF), clareamento dental, limpeza profunda e restaurações, oferecemos tratamentos completos para realçar sua saúde bucal e estética com resultados seguros e duradouros.</p>
        <div className="mt-5">
        <Link className="py-1 px-4 bg-primaryOp font-bold text-lg rounded-full text-white text-center transform hover:scale-105 duration-300 ease-in-out hover:bg-primary"  to="/sobre">Saiba mais</Link>
        </div>
      </div>
    </div>
  );
}

export default Specialist;