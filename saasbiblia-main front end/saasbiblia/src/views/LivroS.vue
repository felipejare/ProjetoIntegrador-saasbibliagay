<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      livros: [
        { id: "33129ae6-a24a-473d-843f-49cad354acf1", nome: "Livro 1" },
        { id: "136156f9-5c1b-4fb3-aeff-ed5bd72ff176", nome: "Livro 2" },
      ],
      novo_livro: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_livro !== "") {
        const novo_id = uuidv4();
        this.livros.push({
          id: novo_id,
          nome: this.novo_livro,
        });
        this.novo_livro = "";
      }
    },
    excluir(livro) {
      const indice = this.livros.indexOf(livro);
      this.livros.splice(indice, 1);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h1>Livros</h1>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_livro" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>