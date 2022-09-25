import axios from "axios";
export default class AutoresApi {
    async buscarTodosOsAutores (){
        const response = await axios.get("https://backendsaas.herokuapp.com/autores");
        return response.data;
    }
    async buscarAutores(id) {
        const response = await axios.get(`https://backendsaas.herokuapp.com/autores/${id}`);
        return response.data; 
    }
    async adicionarAutores(autor) {
        const response = await axios.post("https://backendsaas.herokuapp.com/autores" ,autor);
        return response.data;
    }
    async excluirAutores(id) {
        const response = await axios.delete(`https://backendsaas.herokuapp.com/autores/${id}`);
        return response.data;
    }
    async atualizarAutores(autor) {
        const response = await axios.put(`https://backendsaas.herokuapp.com/autores/${autor}`,autor,);
        return response.data;
    }
}