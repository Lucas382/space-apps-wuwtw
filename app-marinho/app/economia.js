import { useTranslation } from "react-i18next";
import SlidePage from "./components/slidePage";

const Economia = () => {
  const { t } = useTranslation();

  const data = {
    texts: [t("economia-1"), t("economia-2")],
    source:
      "https://www.conservation.org/priorities/expanding-nature-positive-economies",
  };

  return <SlidePage title={t("economia")} data={data} />;
};

export default Economia;
