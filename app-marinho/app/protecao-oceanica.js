import { useTransition } from "react";
import SlidePage from "./components/slidePage";
import { useTranslation } from "react-i18next";

const ProtecaoOceanica = () => {
  const { t } = useTranslation();
  const data = {
    texts: [t("protecao-oceanica-1"), t("protecao-oceanica-2")],
    source:
      "https://www.io.usp.br/index.php/noticias/10-io-na-midia/933-mudancas-climaticas-tem-grande-impacto-no-oceano-austral.html",
  };

  return <SlidePage title={t("protecao-oceanica")} data={data} />;
};

export default ProtecaoOceanica;
