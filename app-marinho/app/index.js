import { useRouter } from "expo-router";
import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";
import { useTranslation } from "react-i18next";

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const routes = [
    { route: "/mapa", img: images.mapaIcone, name: t("map-title") },
    { route: "/animais", img: images.orcaIcone, name: t("animals-title") },
    {
      route: "/clima",
      img: images.temperaturaIcone,
      name: t("clima-title"),
    },
    { route: "/plataformas", img: images.aguaIcone, name: t("water-title") },
    {
      route: "/preservacao",
      img: images.careIcone,
      name: t("preservacao"),
    },
  ];

  return <MenuPage title={t("title")} routes={routes} />;
};

export default Home;
