import SlidePage from "./components/slidePage";

const VidaMarinha = () => {
  const data = {
    texts: [
      "Segundo a Conservation.org, Cerca de 44 por cento da população mundial vive a 150 quilómetros (93 milhas) do oceano. Os oceanos são a origem e o motor de toda a vida neste planeta – e estão em extremo perigo.",
      "Para mudar esta situação, é necessário realizar políticas de conscientização e de organização. Para isto, a conservation.org faz proveito das mais recentes inovações tecnológicas e sociais, ao mesmo tempo em que estabelece parcerias com organizações, empresas e governos em todo o mundo.",
    ],
    source: "https://www.conservation.org/priorities/doubling-ocean-protection",
  };

  return <SlidePage title={"Proteção à vida Marinha"} data={data} />;
};

export default VidaMarinha;
