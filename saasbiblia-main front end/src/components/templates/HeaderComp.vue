<script></script>

<template>
  <header class="header">
    <div class="circle"></div>
    <!-- <span></span> -->
    <!-- <div> -->
      <form>
        <input type="text" name="search" placeholder="Pesquisar">
      </form>
    <!-- </div> -->
  </header>
</template> 

<style scoped>
input[type=text] {
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  transition: width 0.4s ease-in-out;


  
}

input[type=text]:focus {
  width: 100%;
}

.header {
  width: 31%;
  justify-content: space-between;
  display: flex;
  
}

.circle {
  margin-bottom: 5px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a882b7;
  /* margin: 50px; */
}


</style>
