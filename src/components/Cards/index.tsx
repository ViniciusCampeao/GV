import cardData from "./partials";
import './partials/index.css'

const Cards: React.FC = () => {
  return (
    <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-3 
      gap-8 
      mx-4
      sm:mx-12
      lg:mx-52
      my-8
    ">
      {cardData.map((card, index) => (
        <div key={index} className="
          w-full
          sm:w-72
          flex 
          flex-col 
          justify-center 
          items-center 
          font-nunito 
          glow-border
          p-4
        ">
          <img className="mx-auto mt-5 h-28 mb-5" src={card.img} alt={card.title} />
          <h1 className="text-2xl lg:text-3xl font-semibold mb-1 text-center">{card.title}</h1>
          <p className="text-center text-sm lg:text-base">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
