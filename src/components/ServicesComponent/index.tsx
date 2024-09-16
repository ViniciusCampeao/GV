import './partials/style.css';

interface Service {
  img: string;
  title: string;
}

const Services = ({ data }: { data: Service[] }) => {
  return (
    <div className="font-nunito">
      <div className="flex flex-row justify-center">
        <h1 className="font-extrabold text-2xl">Serviços</h1>
      </div>
      <div className="grid sm:grid-cols-3 gap-2 sm:gap-7 lg:mx-52 mt-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="flex flex-row items-center py-4 rounded-full shadowCustom transform hover:scale-105 duration-300 ease-in-out"
          >
            <img className="ml-4 w-10 lg:w-16" src={service.img} alt={service.title} />
            <p className="ml-4 font-light lg:text-xl">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
