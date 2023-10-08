import { useRouter } from "expo-router";
import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";

const Home = () => {
  const router = useRouter();

  const routes = [
    {route: "/mapa", img: images.mapaIcone},
    {route: "/animais", img: images.orcaIcone},
    {route: "/clima", img: images.temperaturaIcone},
    {route: "/agua", img: images.aguaIcone},
    {route: "/preservacao", img: images.careIcone},
  ];

  return <MenuPage title="Selecione o que gostaria de visualizar" routes={routes} />
};

export default Home;
