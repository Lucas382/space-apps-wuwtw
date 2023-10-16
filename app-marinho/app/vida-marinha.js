import SlidePage from "./components/slidePage";

import { useTranslation } from "react-i18next";

const VidaMarinha = () => {
  const { t } = useTranslation();

  const data = {
    texts: [t("vida-marinha-1"), t("vida-marinha-2")],
    source: "https://www.conservation.org/priorities/doubling-ocean-protection",
  };

  return <SlidePage title={t("vida-marinha")} data={data} />;
};

export default VidaMarinha;
