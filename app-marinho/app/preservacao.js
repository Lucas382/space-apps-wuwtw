import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";

const Preservacao = () => {
  const routes = [
    { route: "/estabilizacao-climatica", img: images.terra_icone },
    { route: "/protecao-oceanica", img: images.mar_icone },
    { route: "/economia", img: images.moeda_icone },
    { route: "/vida-marinha", img: images.peixe_icone },
  ];

  return <MenuPage title={"Preservação Ambiental"} routes={routes} />;
};

export default Preservacao;
