<script>
  import EditorasApi from "@/api/editoras.js"
const editorasApi = new EditorasApi()
export default {
  data() {
    return{
      editora: {},
      editoras:[],
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditoras(this.editora);
      } else {
        await editorasApi.adicionarEditoras(this.editora)
      }
      this.editoras = await editorasApi.buscarTodasAsEditoras();
      this.editora = {};
    },
    async excluir(editora) {
      await editorasApi.excluirEditoras(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora)
    },
  },
};

</script>

<template>
  <div class="">
    <div class="title">
      <h1>Editoras</h1>
    </div>
    <div class="form-input">
      <input type="text" v-model="editora.nome" @keyup.enter="salvar" />
      <input type="text" v-model="editora.site"  />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-editoras">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Site</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="editora in editoras" :key="editora.id">
            <td>{{ editora.id }}</td>
            <td>{{ editora.nome }}</td>
            <td>{{ editora.site }}</td>
            <td>
              <button @click="excluir(editora)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.form-input {
margin-top: 10px;
display: flex;
justify-content: center;
}

.form-input input {
    width: 60%;
    height: 40px;
    border: 1px solid white;
    border-radius: 10px;
    padding: 0 10px;
}

.form-input button {
    margin-left: 1px;
    width: 20%;
    height: 40px;
    border: 1px solid aquamarine;
    border-radius: 10px;
    background-color: aquamarine;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.list-editores {
    display: flex;
    justify-content: center;
}

table {
    width: 50%;
    margin: 2% auto;
    border-collapse: collapse;
}

table tr th {
    border: 1px solid white;
    padding: 10px;
    font-weight: bold;
}

table tr td {
    border: solid 1px white;
    padding: 10px;
}

table tr:nth-child(odd) {
    background-color: white;
}
</style>
