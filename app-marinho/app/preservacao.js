import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";

const Preservacao = () => {
  const routes = [
    {
      route: "/estabilizacao-climatica",
      img: images.terra_icone,
      name: "Estabilização Climática",
    },
    {
      route: "/protecao-oceanica",
      img: images.mar_icone,
      name: "Dupla Proteção Oceânica",
    },
    {
      route: "/economia",
      img: images.moeda_icone,
      name: "Expandir Economias Positivas para a Natureza",
    },
    {
      route: "/vida-marinha",
      img: images.peixe_icone,
      name: "Proteção à Vida Marinha",
    },
  ];

  return <MenuPage title={"Preservação Ambiental"} routes={routes} />;
};

export default Preservacao;
