import { useEffect, useState } from "react";
import style from "./Cores.module.css";
import { cores } from "./mockedcolores";

export default function Cores() {
  const [indiceCor, setIndiceCor] = useState(-1);

  const corAtual =
    indiceCor === -1 ? { name: "Padrão", hex: "#FFFFFF" } : cores[indiceCor];

  useEffect(() => {
    document.body.style.backgroundColor = corAtual.hex;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [corAtual.hex]);

  const mudarCor = () => {
    setIndiceCor((prevIndice) => {
      return (prevIndice + 1) % cores.length;
    });
  };

  return (
    <div className="container pt-5 text-center">
      <div className={style.cores} style={{ "--cor-fundo": corAtual.hex }}>
        <h2>Cor: {corAtual.name}</h2>
        <h3>HEX: {corAtual.hex}</h3>

        <button className="btn btn-primary mt-4 px-4 py-2" onClick={mudarCor}>
          Mudar Cor de Fundo
        </button>
      </div>
    </div>
  );
}
