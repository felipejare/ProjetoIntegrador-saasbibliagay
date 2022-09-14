<script>
import AutoresApi from "@/api/autores.js"
const autoresApi = new AutoresApi()
export default {
  data() {
    return{
      autor: {},
      autores:[],
    };
  },
  async created() {
    this.autores = await autoresApi.buscarTodosOsAutores();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autoresApi.atualizarAutores(this.autor);
      } else {
        await autoresApi.adicionarAutores(this.autor)
      }
      this.autores = await autoresApi.buscarTodosOsAutores();
      this.autor = {};
    },
    async excluir(autor) {
      await autoresApi.excluirAutores(autor.id);
      this.autores = await autoresApi.buscarTodosOsAutores();
    },
    editar(autor) {
      Object.assign(this.autor, autor)
    },
  },
};
</script>

<template>
  <div class="">
    <div class="title">
      <h1>Autores</h1>
    </div>
    <div class="form-input">
      <input type="text" placeholder="Adicionar novo Autor" v-model="autor.nome" @keyup.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-autores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="autor in autores" :key="autor.id">
            <td>{{  autor.id }}</td>
            <td>{{  autor.nome }}</td>
            <td>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.title{
  color:black;
  justify-content: center;
  display: flex;
}

.list-livros{
  display: block;
  align-items: center;
}

.form-input{
  display: flex;
  align-items: center;
}

tr{
  color:black;
  display: flex;
  justify-content: center;

}
</style>
