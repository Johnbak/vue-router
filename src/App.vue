<template>
  <div id="app">

<ul class="nav">
    <li class="nav-item">
       <router-link to="/" class="nav-link active">Home</router-link> 
   </li>
  <li class="nav-item">
     <router-link to="/about" class="nav-link active">About</router-link>
  </li>
  <li class="nav-item">
     <router-link :to="{name:'max'}" class="nav-link active">MAX</router-link>
  </li>
   <li class="nav-item">
     <router-link :to="{name:'user'}  " class="nav-link active">user</router-link>
  </li>

</ul>

<!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
