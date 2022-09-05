import axios from "axios";
export default class AutoresApi {
    async buscarTodosOsAutores (){
        const response = await axios.get("http://localhost:4000/autores");
        return response.data;
    }
    async buscarAutores(id) {
        const response = await axios.get(`http://localhost:4000/autores/${id}`);
        return response.data; 
    }
    async adicionarAutores(autor) {
        const response = await axios.ad("http://localhost:4000/autores" ,autor);
        return response.data;
    }
    async excluirAutores(id) {
        const response = await axios.delete(`http://localhost:4000/autores/${id}`);
        return response.data;
    }
    async atualizarAutores(autor) {
        const response = await axios.put(`http://localhost:4000/autores/${autor}`,autor,);
        return response.data;
    }
}