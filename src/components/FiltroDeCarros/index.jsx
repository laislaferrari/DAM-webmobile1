import { useEffect, useState } from "react";
import { getCarros } from "../../services/api";

export default function FiltroDeCarros() {
  const [carros, setCarros] = useState([]);
  const [marcaSelecionada, setMarcaSelecionada] = useState("");

  useEffect(() => {
    getCarros()
      .then((response) => setCarros(response.data))
      .catch((error) => console.error("Erro ao buscar carros:", error));
  }, []);

  const marcasUnicas = [...new Set(carros.map((carro) => carro.marca))];

  const carrosFiltrados = carros.filter(
    (carro) => carro.marca === marcaSelecionada,
  );

  return (

    
    <div className="container min-vh-100">
      <h2 className="py-4">Lista de Carros</h2>
      <div className="py-3">
        <label htmlFor="filtroMarca" className="form-label fw-bold">
          Filtrar por Marca:
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={(e) => setMarcaSelecionada(e.target.value)}
          value={marcaSelecionada}
        >
          <option value="">Todas as marcas</option>
          {marcasUnicas.map((marca, index) => (
            <option key={index} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>
      {marcaSelecionada && (
        <ul className="list-group">
          {carrosFiltrados.map((carro) => (
            <li key={carro.id} className="list-group-item">
              <strong>{carro.marca}</strong> - {carro.modelo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
