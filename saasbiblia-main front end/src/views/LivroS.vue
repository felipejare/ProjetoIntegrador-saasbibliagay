<script>
  import CategoriasApi from "@/api/categorias.js"
const categoriasApi = new CategoriasApi()
import LivrosApi from "@/api/livros.js"
const livrosApi = new LivrosApi()
import EditorasApi from "@/api/editoras.js"
const editorasApi = new EditorasApi()
export default {
  data() {
    return{
      livro: {},
      livros:[],
      categorias:[],
      editoras:[],
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.atualizarLivro(this.livro);
      } else {
        await livrosApi.adicionarLivro(this.livro)
      }
      this.livros = await livrosApi.buscarTodosOsLivros();
      this.livro = {};
    },
    async excluir(livro) {
      await livrosApi.excluirLivro(livro.id);
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro)
    },
  },
};
</script>
<template>
  <div class="">
    <article class="title">
      <h1>Livros</h1>
    </article>

  </div>
      <div class="form-input">
      <input type="text" placeholder="Titulo do Livro"  v-model="livro.nome" @keyup.enter="salvar">
      <select placeholder="Categoria" name="" id="select-e" v-model="livro.categoria">
        <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.nome">{{ categoria.nome }}</option>
      </select>
      <select name="" placeholder="Editora" id="select-e" v-model="livro.editora">
        <option v-for="editora in editoras" :key="editora.id" :value="editora.nome">{{ editora.nome }}</option>
      </select>
      <input placeholder="Quantidade" type="number" v-model="livro.quantidade" @keyup.enter="salvar" />
      <input placeholder="Preço" type="number" v-model="livro.preco" @keyup.enter="salvar" />
      <button @click="salvar">Adicionar livro</button>
    </div>
    <div class="list-livros">
      <table>
        <thead>
          <tr class="contents">
            <th>ID</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Editora</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="livro in livros" :key="livro.id">
            <td>{{ livro.id }}</td>
            <td>{{ livro.nome }}</td>
            <td>{{ livro.categoria }}</td>
            <td>{{ livro.editora }}</td>
            <td>{{ livro.quantidade }}</td>
            <td>{{ livro.preco }}</td>
            <td>
              <button @click="editar(livro)">Editar</button>
              <button @click="excluir(livro)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
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

.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(255, 170, 251);
  border-radius: 10px;
  background-color: rgb(255, 170, 251);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

table {
  width: 100%;
  margin: 2% auto;
  border-collapse: collapse;
}

table tr th {
  border: 1px solid rgb(255, 170, 251);
  padding: 10px;
}

table tr td {
  border: 1px solid rgb(255, 170, 251);
}

table tr:nth-child(odd) {
  background-color: rgb(255, 170, 251);
}

select{
  width: 60%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}


</style>