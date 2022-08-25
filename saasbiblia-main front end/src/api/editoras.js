import axios from "axios";
export default class EditorasApi {
    async buscarTodasAsEditoras (){
        const response = await axios.get ("http://localhost:4000/livros");
        return response.data;
    }
    async buscarEditoras(id) {
        const response = await axios.get("http://localhost:4000/livros");
        return response.data;
    }
    async adicionaEditoras(livro) {
        const response = await axios.post("http://localhost:4000/livros");
        return response.data;
    }
    async excluirEditoras(id) {
        const response = await axios.delete("http://localhost:4000/livros");
        return response.data;
    }
    async atualizaEditoras(livro) {
        const response = await axios.put("http://localhost:4000/livros");
        return response.data;
    }
}