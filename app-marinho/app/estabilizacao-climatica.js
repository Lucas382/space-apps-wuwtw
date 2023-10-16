import { useTranslation } from "react-i18next";
import SlidePage from "./components/slidePage";

const EstabilizacaoClimatica = () => {
  const { t } = useTranslation();

  const data = {
    texts: [t("estabilizacao-clima-1"), t("estabilizacao-clima-2")],
    source:
      "https://www.io.usp.br/index.php/noticias/10-io-na-midia/933-mudancas-climaticas-tem-grande-impacto-no-oceano-austral.html",
  };

  return <SlidePage title={t("estabilizacao-clima")} data={data} />;
};

export default EstabilizacaoClimatica;
