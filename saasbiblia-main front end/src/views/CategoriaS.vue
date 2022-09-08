<script>
import CategoriasApi from "@/api/categorias.js"
const categoriasApi = new CategoriasApi()
export default {
  data() {
    return{
      categoria: {},
      categorias:[],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategorias(this.categoria);
      } else {
        await categoriasApi.adicionarCategorias(this.categoria)
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategorias(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria)
    },
  },
};
</script>
<template>
  <div class="">
    <div class="title">
      <h1>Categorias</h1>
    </div>
    <div class="form-input">
      <input type="text" v-model="categoria.nome" @keyup.enter="salvar" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-categorias">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{  categoria.id }}</td>
            <td>{{  categoria.nome }}</td>
            <td>
              <button @click="excluir(categoria)">Excluir</button>
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