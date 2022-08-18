import axios from "axios";
export default class CategoriasApi {
    async buscarTodosAsCategorias (){
        const response = await axios.get ();
        return response.data;
    }
    async buscarCategorias(id) {
        const response = await axios.get();
        return response.data;
    }
    async adicionarCategorias(livro) {
        const response = await axios.post();
        return response.data;
    }
    async excluirCategorias(id) {
        const response = await axios.delete();
        return response.data;
    }
    async atualizarCategorias(livro) {
        const response = await axios.put();
        return response.data;
    }
}