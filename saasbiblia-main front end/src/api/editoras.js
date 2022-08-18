import axios from "axios";
export default class EditorasApi {
    async buscarTodasAsEditoras (){
        const response = await axios.get ();
        return response.data;
    }
    async buscarEditoras(id) {
        const response = await axios.get();
        return response.data;
    }
    async adicionaEditoras(livro) {
        const response = await axios.post();
        return response.data;
    }
    async excluirEditoras(id) {
        const response = await axios.delete();
        return response.data;
    }
    async atualizaEditoras(livro) {
        const response = await axios.put();
        return response.data;
    }
}