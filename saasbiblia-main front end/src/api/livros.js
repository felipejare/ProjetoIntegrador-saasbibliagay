import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get(
      "https://backendsaas.herokuapp.com/livros"
    );
    return response.data;
  }

  async buscarLivro(id) {
    const response = await axios.get(
      `https://backendsaas.herokuapp.com/livros/${id}`
    );
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post(
      "https://backendsaas.herokuapp.com/livros",
      livro
    );
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(
      `https://backendsaas.herokuapp.com/livros/${id}`
    );
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://backendsaas.herokuapp.com/livros/${livro}`,
      livro
    );
    return response.data;
  }
}
