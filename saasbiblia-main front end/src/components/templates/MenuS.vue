<script></script>

<template>
        <div class="menu">
            <div class="menu-home"> <RouterLink to="/home"><h2>Home</h2></RouterLink></div>
            <div class="menu-editoras"> <RouterLink to="/editoras"><h2>Editoras</h2></RouterLink></div>
            <div class="menu-cat"> <RouterLink to="/categorias"><h2>Categorias</h2></RouterLink></div>
            <div class="menu-aut"> <RouterLink to="/autores"><h2>Autores</h2></RouterLink></div>
            <div class="menu-liv"><RouterLink to="/livros"><h2>Livros</h2></RouterLink></div>
        </div>
</template>

<style>

.menu {
  background-color: #773b80;
  height: inherit;
  width: 20%;
}

.menu-home{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 50px;
}
.menu-editoras{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 50px;
}
.menu-cat{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 50px;

}
.menu-aut{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 50px;

}
.menu-liv{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 50px;

}
</style>