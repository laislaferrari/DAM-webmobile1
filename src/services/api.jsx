import axios from "axios";

const api = axios.create({
  baseURL: "https://6a209af1e96c1d13b587ab7f.mockapi.io/api/v1",
});

export const getClientes = () => {
  return api.get("/Clientes");
};

export const createCliente = (dados) => {
  return api.post("/Clientes", dados);
};

export const getClienteById = (id) => {
  return api.get(`Clientes/${id}`);
};

export const getCarros = () => {
  return api.get("/Carros");
};
