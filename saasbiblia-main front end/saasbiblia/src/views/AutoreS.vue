<script>
import {v4 as uuidv4} from 'uuid';
export default {
    data() {       
      return {
            autores: [
                { id: "33129ae6-a24a-473d-843f-49cad354acf1", nome: "Autor 1"  },
                { id: "136156f9-5c1b-4fb3-aeff-ed5bd72ff176", nome: "Autor 2"  },
            ],
            novo_autor: '',
        };
    },
    methods:  {
      salvar(){
        if (this.novo_autor !==""){
          const novo_id =uuidv4();
          this.autores.push({
            id: novo_id,
            nome: this.novo_autor,
          });
          this.novo_autor = "";
        }
      },
      excluir(autor){
        const indice = this.autores.indexOf(autor);
        this.autores.splice(indice, 1);
      }
    },
};
</script>
<template>
  <div class="container">
    <div class="title">
      <h1>Autores</h1>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_autor" />
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
              <button>Editar</button>
              <button @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      
    </div>
  </div>
</template>
<style>
</style>
