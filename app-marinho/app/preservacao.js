import { useTranslation } from "react-i18next";
import { images } from "../assets/configs";
import MenuPage from "./components/menuPage";

const Preservacao = () => {
  const { t } = useTranslation();
  const routes = [
    {
      route: "/estabilizacao-climatica",
      img: images.terra_icone,
      name: t("estabilizacao-clima"),
    },
    {
      route: "/protecao-oceanica",
      img: images.mar_icone,
      name: t("protecao-oceanica"),
    },
    {
      route: "/economia",
      img: images.moeda_icone,
      name: t("economia"),
    },
    {
      route: "/vida-marinha",
      img: images.peixe_icone,
      name: t("vida-marinha"),
    },
  ];

  return <MenuPage title={t("preservacao")} routes={routes} />;
};

export default Preservacao;
