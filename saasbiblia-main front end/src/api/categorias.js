import axios from "axios";
export default class CategoriasApi {
  async buscarTodasAsCategorias() {
    const response = await axios.get(
      "https://backendsaas.herokuapp.com/categorias"
    );
    return response.data;
  }
  async buscarCategorias(id) {
    const response = await axios.get(
      `https://backendsaas.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }
  async adicionarCategorias(categoria) {
    const response = await axios.post(
      "https://backendsaas.herokuapp.com/categorias",
      categoria
    );
    return response.data;
  }
  async excluirCategorias(id) {
    const response = await axios.delete(
      `https://backendsaas.herokuapp.com/categorias/${id}`
    );
    return response.data;
  }
  async atualizarCategorias(categoria) {
    const response = await axios.put(
      `https://backendsaas.herokuapp.com/categorias/${categoria}`,
      categoria
    );
    return response.data;
  }
}
