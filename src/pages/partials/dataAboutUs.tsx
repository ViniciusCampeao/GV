import checkup from '../../assets/images/Checkup.png';
import atendimento from '../../assets/images/Atendimento.png';
import limpeza from '../../assets/images/Limpeza.png';
import estetica from '../../assets/images/Estetica.png';
import crianca from '../../assets/images/Criança.png';
import docs from '../../assets/images/Docs.png';

interface ServicesData {
  img: string;
  title: string;
}

const servicesData : ServicesData[] = [
  {
    img: checkup,
    title: "Check-up",
  },
  {
    img: limpeza,
    title: "Limpeza dental",
  },
  {
    img: crianca,
    title: "HOF",
  },
  {
    img: atendimento,
    title: "Atendimento prioritário",
  },
  
  {
    img: estetica,
    title: "Estética",
  },
  {
    img: docs,
    title: "Documentação dental",
  },
  
];

export default servicesData;
