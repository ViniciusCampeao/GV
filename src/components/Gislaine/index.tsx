import { Link } from 'react-router-dom';
import jaleco from '../../assets/images/pessoas/jaleco.png';

const Gislaine = () => {
  return (
    <div className="font-nunito px-6 sm:px-12 lg:px-52 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
        <div className="flex justify-center">
          <img className="rounded-3xl border border-gray-500 w-full max-w-sm lg:max-w-md" src={jaleco} alt="jaleco" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-4">
            <h1 className="font-extrabold text-lg sm:text-xl">Nome:</h1>
            <p className="font-extralight text-base sm:text-lg">Gislaine Vieira</p>
          </div>
          <div className="mb-4">
            <h1 className="font-extrabold text-lg sm:text-xl">Especialidades:</h1>
            <ul className="list-disc mt-1 text-base sm:text-lg font-extralight">
              <li>Formação em odontologia na faculdade Unimar</li>
              <li>Pós em endodontia</li>
              <li>Habilitação em Toxina botulínica - HOF</li>
              <li>Capacitação em odontologia hospitalar</li>
            </ul>
          </div>
          <div className="mb-4">
            <h1 className="font-extrabold text-lg sm:text-xl">Sobre mim:</h1>
            <p className="font-extralight text-base sm:text-lg mt-1">
              Sou Gislaine, nascida em São Caetano do Sul, no ABC Paulista. Tenho uma família amorosa que é meu alicerce e, sempre que posso, gosto de estar com eles e meus amigos. Amo cachorros e sou apaixonada por viajar, explorar novos lugares e culturas. Acredito que esses momentos, cercados de pessoas queridas e experiências novas, tornam a vida ainda mais especial.
            </p>
          </div>
          <div className="mt-5 flex justify-center">
            <Link
              className="py-2 px-6 bg-primaryOp font-bold text-base sm:text-lg rounded-full text-white text-center transform hover:scale-105 duration-300 ease-in-out hover:bg-primary"
              to="/contato"
            >
              Marque uma consulta
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gislaine;
