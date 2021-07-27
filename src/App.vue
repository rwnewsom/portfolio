<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/aboutvue">About Vue</router-link> |
      <router-link to="/aboutme">About Me</router-link> 
    </div>
    <router-view/>
  </div>
</template>

<!-- Colors:Black: #040303; Dark Slate Gray: #3A4E48; Xanadu: #6A7B76; Artichoke: #8B9D83 Pale Silver: #BEB0A7 -->
<style>
html{
  background-color: #3A4E48;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background-color: #3A4E48;
}

#nav {
  padding: 30px;
  background-color: #3A4E48;
}

#nav a {
  font-weight: bold;
  color: #8B9D83;
}

#nav a.router-link-exact-active {
  color: #BEB0A7;
}
</style>
