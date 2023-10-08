import SlidePage from "./components/slidePage";

const EstabilizacaoClimatica = () => {
  const data = {
    texts: [
      "Dados fornecidos pela Agência FAPESP, apontam que  90% do aquecimento global criado pelos humanos desde a década de 1970 foi absorvido pelos oceanos.",
      "Para evitar danos irreversíveis ao clima que nos sustenta, a humanidade deve emitir menos gases com efeito de estufa que aquecem o clima, ao mesmo tempo que remove o excesso de carbono da atmosfera. Por outras palavras: se não protegermos e restaurarmos a natureza, não salvaremos o clima.",
    ],
    source:
      "https://www.io.usp.br/index.php/noticias/10-io-na-midia/933-mudancas-climaticas-tem-grande-impacto-no-oceano-austral.html",
  };

  return <SlidePage title={"Estabilização Climática"} data={data} />;
};

export default EstabilizacaoClimatica;
