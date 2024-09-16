import Clinica from '../../assets/images/Clinica.png';

const AboutUs = () => {
  return (
    <div className="font-nunito">
      <div className="px-6 py-12 sm:px-12 sm:py-24 lg:px-52 lg:py-32 bg-primary text-white grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div>
          <h1 className="font-extrabold text-3xl sm:text-4xl mb-5">Especialidade</h1>
          <p className="font-light text-base sm:text-xl">
            Oferecemos uma ampla gama de serviços odontológicos, incluindo tratamentos estéticos e funcionais com Toxina Botulínica (HOF), clareamento dental, limpeza profunda, restauração e atendimento prioritário em nossa clínica própria, equipada com tecnologia de ponta para garantir o máximo de conforto e eficiência.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={Clinica} alt="Clinica" className="w-full h-auto max-w-md sm:max-w-lg lg:max-w-full" />
        </div>
      </div>
      <div className="px-6 sm:px-12 lg:px-52 pb-14 pt-16 lg:pt-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">Sobre mim</h1>
      </div>
    </div>
  );
};

export default AboutUs;
