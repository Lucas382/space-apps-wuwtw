import SlidePage from "./components/slidePage";

const ProtecaoOceanica = () => {
  const data = {
    texts: [
      "Pretendemos duplicar a quantidade total de área oceânica sob proteção, ao mesmo tempo que desenvolvemos ciência inovadora para proteger o alto mar, os recifes de coral e os mangais que sustentam toda a vida na Terra.",
      "É necessária uma ação imediata e transformadora para evitar que o alerta severo da ONU se torne realidade. Precisamos de proteger pelo menos 30% dos oceanos do mundo para que estes continuem a fornecer alimentos, estabilidade climática e ecossistemas saudáveis.",
    ],
    source:
      "https://www.io.usp.br/index.php/noticias/10-io-na-midia/933-mudancas-climaticas-tem-grande-impacto-no-oceano-austral.html",
  };

  return <SlidePage title={"DUPLA PROTEÇÃO OCEÂNICA"} data={data} />;
};

export default ProtecaoOceanica;
