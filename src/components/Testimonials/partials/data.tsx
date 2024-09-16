import anderson from "../../../assets/images/pessoas/Anderson.jpeg";
import enoque from "../../../assets/images/pessoas/Enoque.jpeg";
import fernanda from "../../../assets/images/pessoas/Fernanda.jpeg";
import jessica from "../../../assets/images/pessoas/Jessica.jpeg";
import maria from "../../../assets/images/pessoas/Maria.jpeg";
import reginaldo from "../../../assets/images/pessoas/Reginaldo.jpeg";

interface TestimonialsData {
  img: string;
  name: string;
  profession: string;
  feedback: string;
}

const testimonialsData: TestimonialsData[] = [
  {
    img: anderson,
    name: "Anderson Viola",
    profession: "Advogado",
    feedback: "A clínica é excepcional! Fui muito bem atendido e o ambiente é extremamente limpo e organizado. Fiquei impressionado com o profissionalismo de toda a equipe.",
  },
  {
    img: enoque,
    name: "Enoque Paiva",
    profession: "Locador imobiliário",
    feedback: "A Dra. Gislaine é uma profissional incrível! Sua atenção aos detalhes e cuidado com o paciente fazem toda a diferença. Estou extremamente satisfeito com o tratamento.",
  },
  {
    img: fernanda,
    name: "Fernanda Carvalho",
    profession: "Médica e cirurgiã dentista",
    feedback: "A clínica tem uma infraestrutura moderna e equipamentos de ponta. Isso me deu muita confiança no tratamento. Me senti segura e bem cuidada o tempo todo.",
  },
  {
    img: jessica,
    name: "Jéssica Vieira",
    profession: "Nutricionista, educadora física, designer de interiores",
    feedback: "Fiquei encantada com o atendimento personalizado e o cuidado que tive durante todo o processo. O ambiente é super acolhedor e a equipe está sempre pronta para ajudar.",
  },
  {
    img: maria,
    name: "Maria Vieira",
    profession: "Locadora imobiliária",
    feedback: "A clínica é impecável em termos de limpeza e organização. Isso realmente me impressionou e fez com que eu me sentisse muito confortável durante o atendimento.",
  },
  {
    img: reginaldo,
    name: "Reginaldo Guimarães",
    profession: "Psicólogo clínico",
    feedback: "A Dra. Gislaine é uma excelente profissional, muito atenciosa e cuidadosa. O tratamento foi eficaz e o resultado superou minhas expectativas. Recomendo a todos!",
  },
];

export default testimonialsData;
