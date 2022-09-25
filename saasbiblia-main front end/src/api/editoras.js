import axios from "axios";
export default class EditorasApi {
  async buscarTodasAsEditoras() {
    const response = await axios.get(
      "https://backendsaas.herokuapp.com/editoras"
    );
    return response.data;
  }
  async buscarEditoras(id) {
    const response = await axios.get(
      `https://backendsaas.herokuapp.com/editoras${id}`
    );
    return response.data;
  }
  async adicionarEditoras(editora) {
    const response = await axios.post(
      "https://backendsaas.herokuapp.com/editoras",
      editora
    );
    return response.data;
  }
  async excluirEditoras(id) {
    const response = await axios.delete(
      `https://backendsaas.herokuapp.com/editoras/${id}`
    );
    return response.data;
  }
  async atualizaEditoras(editora) {
    const response = await axios.put(
      `https://backendsaas.herokuapp.com/editoras/${editora}`,
      editora
    );
    return response.data;
  }
}
