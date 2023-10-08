import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";

const Preservacao = () => {
  const routes = [
    { route: "/estabilizacao-climatica", img: images.sol },
    { route: "/protecao-oceanica", img: images.mar_icone },
    { route: "/economia", img: images.moeda_icone },
    { route: "/vida-marinha", img: images.sol },
  ];

  return <MenuPage title={"Preservação Ambiental"} routes={routes} />;
};

export default Preservacao;
