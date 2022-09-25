<script></script>

<template>
        <ul class="menu">
            <li class="menu-home"> <RouterLink to="/home"><h2>Home</h2></RouterLink></li>
            <li class="menu-editoras"> <RouterLink to="/editoras"><h2>Editoras</h2></RouterLink></li>
            <li class="menu-cat"> <RouterLink to="/categorias"><h2>Categorias</h2></RouterLink></li>
            <li class="menu-aut"> <RouterLink to="/autores"><h2>Autores</h2></RouterLink></li>
            <li class="menu-liv"><RouterLink to="/livros"><h2>Livros</h2></RouterLink></li>
        </ul>
</template>

<style>

  a{
    text-decoration-line: none;
  }

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
  border-radius: 15px;
  text-decoration-line: none;
  cursor: pointer;
}
.menu-editoras{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 15px;
  text-decoration-line: none;
}
.menu-cat{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 15px;

}
.menu-aut{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 15px;

}
.menu-liv{
  background-color: #f9e5f0;
  padding: 10px;
  margin: 10px 10px 10px 10px;
  color: white;
  border-radius: 15px;

}
h2{
  text-decoration-line: none ;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li:hover {
  background-color: #f7cde4;
  color: white;
}

li {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

</style>