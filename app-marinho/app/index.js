import { useRouter } from "expo-router";
import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";

const Home = () => {
  const router = useRouter();

  const routes = [
    { route: "/mapa", img: images.mapaIcone, name: "Localizador" },
    { route: "/animais", img: images.orcaIcone, name: "Animais Ameaçados" },
    {
      route: "/clima",
      img: images.temperaturaIcone,
      name: "Previsão do Tempo",
    },
    { route: "/agua", img: images.aguaIcone, name: "Qualidade da Água" },
    {
      route: "/preservacao",
      img: images.careIcone,
      name: "Conservação Ambiental",
    },
  ];

  return (
    <MenuPage title="Selecione o que gostaria de visualizar" routes={routes} />
  );
};

export default Home;
