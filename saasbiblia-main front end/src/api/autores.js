import axios from "axios";
export default class AutoresApi {
    async buscarTodosOsAutores (){
        const response = await axios.get();
        return response.data;
    }
    async buscarAutores(id) {
        const response = await axios.get();
        return response.data; 
    }
    async adicionarAutores(autor) {
        const response = await axios.ad();
        return response.data;
    }
    async excluirAutores(id) {
        const response = await axios.delete();
        return response.data;
    }
    async atualizarAutores(livro) {
        const response = await axios.put();
        return response.data;
    }
}