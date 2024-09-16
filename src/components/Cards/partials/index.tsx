import endodontia from '../../../assets/images/endodontia.png';
import hof from '../../../assets/images/HOF.png';
import hospitalar from '../../../assets/images/OdontoHospitalar.png';

interface CardData {
  img: string;
  title: string;
  description: string;
}

const cardData: CardData[] = [
  {
    img: endodontia,
    title: "Endodontia",
    description: "Cuidados avançados para a saúde dos seus dentes. Como pós-graduada em Endodontia, ofereço tratamentos de canal com precisão e conforto.",
  },
  {
    img: hof,
    title: "HOF",
    description: "Com habilitação em Harmonização Orofacial (HOF), trago técnicas modernas para equilibrar estética e funcionalidade, garantindo um sorriso harmonioso.",
  },
  {
    img: hospitalar,
    title: "Hospitalar",
    description: "Capacitada em Odontologia Hospitalar, cuido da sua saúde bucal com protocolos avançados em ambientes hospitalares, oferecendo segurança e tratamento especializado.",
  },
];

export default cardData;