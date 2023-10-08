import SlidePage from "./components/slidePage";

const Economia = () => {
  const data = {
    texts: [
      "Estamos a ajudar os países a construir economias auto-sustentáveis ​​que se baseiam na protecção, e não na destruição, da natureza.",
      "A Conservação Internacional visa criar modelos de conservação autossustentáveis ​​e escaláveis ​​que possam ser adaptados de um país para outro, concentrando-se em grandes sistemas ecológicos que chamamos de paisagens e paisagens marinhas.",
    ],
    source:
      "https://www.conservation.org/priorities/expanding-nature-positive-economies",
  };

  return (
    <SlidePage
      title={"EXPANDIR ECONOMIAS POSITIVAS PARA A NATUREZA"}
      data={data}
    />
  );
};

export default Economia;
