<script>
import {v4 as uuidv4} from 'uuid';
export default {
    data() {       
      return {
            categorias: [
                { id: "33129ae6-a24a-473d-843f-49cad354acf1", nome: "Categoria 1"  },
                { id: "136156f9-5c1b-4fb3-aeff-ed5bd72ff176", nome: "Categoria 2"  },
            ],
            novo_categoria: '',
        };
    },
    methods:  {
      salvar(){
        if (this.novo_categoria !==""){
          const novo_id =uuidv4();
          this.categorias.push({
            id: novo_id,
            nome: this.novo_categoria,
          });
          this.novo_categoria = "";
        }
      },
      excluir(categoria){
        const indice = this.categorias.indexOf(categoria);
        this.categorias.splice(indice, 1);
      }
    },
};
</script>
<template>
  <div class="">
    <div class="title">
      <h1>Categorias</h1>
    </div>
    <div class="form-input">
      <input type="text" v-model="novo_categoria" />
      <button @click="salvar">Salvar</button>
    </div>
    <div class="list-categorias">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
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