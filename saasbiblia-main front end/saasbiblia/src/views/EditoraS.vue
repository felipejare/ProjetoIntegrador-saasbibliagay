<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      editores: [
        { id: "33129ae6-a24a-473d-843f-49cad354acf1", nome: "Editor 1" },
        { id: "136156f9-5c1b-4fb3-aeff-ed5bd72ff176", nome: "Editor 2" },
      ],
      novo_editor: "",
    };
  },
  methods: {
    salvar() {
      if (this.novo_editor !== "") {
        const novo_id = uuidv4();
        this.editores.push({
          id: novo_id,
          nome: this.novo_editor,
        });
        this.novo_editor = "";
      }
    },
    excluir(editor) {
      const indice = this.editores.indexOf(editor);
      this.editores.splice(indice, 1);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="title">
      <h1>Editores</h1>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_editor" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-editores">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="editor in editores" :key="editor.id">
            <td>{{ editor.id }}</td>
            <td>{{ editor.nome }}</td>
            <td>
              <button>Editar</button>
              <button @click="excluir(editor)">Excluir</button>
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
